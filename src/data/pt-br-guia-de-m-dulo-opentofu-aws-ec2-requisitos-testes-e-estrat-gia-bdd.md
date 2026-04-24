# [PT-BR] Guia de Módulo OpenTofu AWS EC2: Requisitos, Testes e Estratégia BDD

Source: https://dev.to/cedon/pt-br-modulo-opentofu-aws-ec2-requisitos-testes-e-estrategia-bdd-55o1

A criação de módulos reutilizáveis para provisionamento de instâncias EC2 na AWS é uma prática essencial para equipes que buscam infraestrutura como código (IaC) consistente, segura e escalável. Um módulo bem‑escrito vai além da definição de recursos, exige planejamento de requisitos, suíte de testes automatizados e  abordagem orientada ao comportamento (BDD) para garantir que atenda às necessidades de negócio e operacionais. Este guia substitui o uso do Terraform pelo OpenTofu, uma ferramenta que surgiu como um fork da última versão de código aberto do Terraform (1.5.7) e é mantida sob governança neutra da Linux Foundation, oferecendo alternativa totalmente open‑source sob a licença MPL.

Todo o conteúdo apresentado a seguir é totalmente compatível com o OpenTofu: o provedor AWS utilizado é exatamente o mesmo, a sintaxe HCL é idêntica, e o fluxo de trabalho permanece praticamente inalterado. Portanto, você pode aplicar este guia diretamente em seus projetos com OpenTofu sem qualquer modificação adicional.

1.1 Pré‑requisitos de Infraestrutura e CLI

· OpenTofu CLI instalado (versão 1.6.0 ou superior).
· AWS CLI configurada com credenciais que tenham permissões para criar EC2, VPC, sub‑redes e grupos de segurança.
· Um par de chaves SSH (key pair) existente na AWS, utilizado para acesso à instância.
· Uma VPC e pelo menos uma sub‑rede (subnet) onde a instância será lançada. O ID da sub‑rede é um parâmetro obrigatório para o módulo.

1.2 Estrutura Essencial do Módulo

Um módulo deve seguir uma estrutura padrão, composta por três arquivos principais dentro de um diretório (ex.: modules/ec2/):

· main.tofu: contém o recurso aws_instance e demais recursos associados.
· variables.tofu: declara todas as variáveis de entrada.
· outputs.tofu: expõe informações úteis como ID da instância e IP público.

Alternativamente, você pode manter a extensão .tf – o OpenTofu lê ambos os formatos perfeitamente.

1.3 Componentes Obrigatórios no main.tofu

Argumentos adicionais, como user_data, root_block_device e ebs_block_device, podem ser incluídos conforme a necessidade.

1.4 Boas Práticas de Segurança e Organização

· Não inserir credenciais diretamente no módulo; utilizar variáveis de ambiente ou backend remoto.
· Validar variáveis com blocos validation (ex.: restringir instance_type a uma lista permitida).
· Documentar todas as variáveis e outputs no arquivo README.md.
· Utilizar namespaces consistentes nas tags (ex.: Environment, Application).

Um módulo só é confiável se for testado adequadamente. O plano a seguir cobre desde verificações estáticas até testes de integração e testes nativos do OpenTofu.

2.1 Tipos de Teste e Ferramentas

Tipo de Teste | Objetivo | Ferramentas
Análise estática | Validar sintaxe, formatação e boas práticas | tofu fmt, tofu validate, tflint (com wrapper)

Análise de segurança | Identificar configurações inseguras (portas abertas, falta de criptografia) | checkov, tfsec, tofu_checkov

Teste de unidade (mock) | Executar o módulo em ambiente simulado | tofu test com simulação de provedores

Teste de integração nativo | Provisionar recursos reais e realizar asserções diretamente em HCL | tofu test (comandos nativos)

Teste de integração avançado | Testes mais complexos com orquestração em Go | Terratest (compatível com OpenTofu)

Teste de regressão | Verificar se mudanças não quebram versões anteriores | tofu test + versionamento do módulo

2.2 Fase 1: Testes Estáticos

Execute os comandos na raiz do módulo:

Critério de sucesso: nenhum erro ou warning crítico. O tflint pode ser utilizado com o wrapper para OpenTofu, e ferramentas como tofu_checkov estão disponíveis para substituir o checkov legado.

2.3 Fase 2: Testes de Segurança (checkov/tfsec)

Verificações obrigatórias:

· A instância não deve estar em sub‑rede pública sem restrições.
· O grupo de segurança não deve permitir 0.0.0.0/0 para SSH (porta 22) em produção.
· Volumes EBS devem ter encrypted = true.
· O módulo não deve expor variáveis sensíveis nos outputs.

O OpenTofu é suportado nativamente por essas ferramentas de análise estática.

2.4 Fase 3: Testes Nativos com tofu test

A partir da versão 1.6, o OpenTofu inclui o comando tofu test, que permite escrever testes de integração diretamente em HCL. O comando cria infraestrutura real (em uma conta AWS de teste), executa asserções e, ao final, destrói os recursos criados automaticamente.

Exemplo de arquivo de teste (tests/ec2.tofutest.hcl)

Para executar:

O OpenTofu executará o teste, criando recursos reais e destruindo‑os ao final. A partir da versão 1.8, o tofu test também suporta a simulação de provedores completos, o que facilita testes de unidade sem depender de recursos externos.

2.5 Fase 4: Testes de Integração Avançados com Terratest

Para cenários que exigem mais controle ou múltiplas etapas, o Terratest (framework em Go) pode ser utilizado. Como o OpenTofu é um substituto direto (“drop‑in replacement”) do Terraform, nenhuma alteração no código dos testes é necessária – basta garantir que o binário tofu esteja disponível no ambiente.

Exemplo simplificado:

Cenários a serem cobertos:

· Criação básica (valores mínimos).
· Com user_data para executar script de bootstrap.
· Com volume EBS adicional.
· Com tipo de instância inválido (deve falhar).
· Destruição limpa (verificar ausência de recursos órfãos).

2.6 Critérios de Aceitação do Plano de Testes

· tofu validate: sem erros.
· tofu fmt: 0 diferenças.
· tflint (com wrapper): sem warnings de nível ERROR.
· checkov/tofu_checkov: todos os checks de severidade HIGH aprovados.
· tofu test: todos os cenários de teste nativos aprovados.
· Teste de criação básica (via Terratest): sucesso.
· Teste de conectividade SSH: sucesso.
· Teste de destruição: nenhum recurso remanescente.

O BDD permite descrever o comportamento esperado em linguagem natural, garantindo que o módulo atenda aos requisitos de negócio e operacionais. A ferramenta terraform‑compliance (que é compatível com OpenTofu) permite escrever cenários em Gherkin e validá‑los contra o plano gerado.

3.1 Ferramentas Recomendadas

· terraform-compliance: executa cenários escritos em Gherkin contra o plano do OpenTofu.
· tofu test com blocos run e assert (pode ser usado para validar comportamentos específicos).

3.2 Estrutura de Diretórios para BDD

3.3 Exemplos de Cenários Gherkin

Criação básica (creation.feature):

Segurança (security.feature):

Conectividade (connectivity.feature):

Destruição (destruction.feature):

3.4 Execução com terraform-compliance

Instalação:

Execução:

Integração contínua (GitHub Actions):

3.5 Matriz de Cenários Obrigatórios

Feature | Cenário | Prioridade
Creation | Criar com valores mínimos | Must-have

Security | SSH restrito por IP | Must-have

Security | EBS criptografado | Must-have

Security | Sem portas administrativas para 0.0.0.0/0 | Must-have

Connectivity | SSH reachable | Should-have

Destruction | Destruição remove todos os recursos | Must-have

3.6 Critérios de Aceitação BDD

· 100% dos cenários classificados como “Must‑have” devem ser aprovados.
· Nenhum cenário pode falhar devido a dependências externas (sub‑redes inexistentes, etc.). Utilize variáveis consistentes ou mocks (via tofu test).
· Os arquivos .feature devem ser revisados pelas equipes de operações e segurança.

Desenvolver um módulo OpenTofu para EC2 vai muito além de escrever um recurso aws_instance. É necessário planejar requisitos, estruturar código de forma reutilizável/segura, implementar bateria de testes (estáticos, de segurança, integração nativa com tofu test, e destrutivos) e adotar estratégia BDD para alinhar o comportamento do módulo às expectativas de negócio.

A transição para o OpenTofu não exige mudanças no código que é um substituto direto do Terraform, com a vantagem adicional de ser totalmente open‑source e governado pela comunidade, eliminando questões de licenciamento e garantindo a perenidade do seu investimento em IaC.

Ao seguir este guia, você terá um módulo robusto, testável e production ready, além de facilitar a colaboração entre equipes de desenvolvimento, operações e segurança.

Referências