# Desplegar OpenClaw en AWS Lightsail sin sufrir 😎

Source: https://dev.to/chainiz/desplegar-openclaw-en-aws-lightsail-sin-sufrir-7lh

Si deseas desplegar OpenClaw en AWS Lightsail de manera simple, sencilla, repetible y sin pelear con pasos manuales, una buena opción es usar AWS CDK + Python + uv.

En este tutorial te muestro cómo levantar toda la infraestructura con Infrastructure as Code.

🦀 OpenClaw + AWS Lightsail + IaC

Porque hacerlo a mano una vez está bien, pero repetirlo muchas veces es "pesado".

Con IaC (Infrastructure as Code) ganas:

Tu infraestructura en Lightsail con:

Necesitas tener instalado:

Clonar el repositorio de github del proyecto aws-cdk-lightsail-openclaw

Antes de sintetizar o desplegar el stack, prepara tu entorno local instalando las dependencias del proyecto y validando que tus credenciales de AWS estén configuradas correctamente.

Asegúrate de tener:

Desde la raíz del repositorio, ejecuta:

Si todavía no tienes credenciales configuradas, ejecuta:

Ingresa tu:

Si usas perfiles de AWS, puedes exportar el perfil antes de continuar:

macOS/Linux

Windows PowerShell

Deberías ver una salida similar a:

Archivo: config/dev.json

Asegúrate de validar estos campos:

Importante: tiene que ser de Lightsail (no EC2) y en la misma region especificada en el archivo de configuración.

Genera la clave:

Impórtala:

Valídala:

Genera la clave:

Impórtala:

Valídala:

Cuando termine, verás outputs como:

Conéctate por SSH:

Chequeo rápido:

La idea no es solo desplegar una instancia, sino dejar el proceso listo para repetirse sin depender de pasos manuales ni configuraciones perdidas.

Templates let you quickly answer FAQs or store snippets for re-use.

Are you sure you want to hide this comment? It will become hidden in your post, but will still be visible via the comment's permalink.

Hide child comments as well

Confirm

For further actions, you may consider blocking this person and/or reporting abuse

We're a place where coders share, stay up-to-date and grow their careers.