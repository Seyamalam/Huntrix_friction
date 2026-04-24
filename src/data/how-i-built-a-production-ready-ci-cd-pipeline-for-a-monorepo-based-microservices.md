# How I Built a Production-Ready CI/CD Pipeline for a Monorepo-Based Microservices System with Jenkins, Docker Compose, and Traefik

Source: https://www.freecodecamp.org/news/build-production-ready-ci-cd-pipeline-for-monorepo-based-microservices-system/

This tutorial is a complete, real-world guide to building a production-ready CI/CD pipeline using Jenkins, Docker Compose, and Traefik on a single Linux server.

You’ll learn how to expose services on a custom domain with auto-renewing HTTPS, and implement a smart deployment strategy that detects changes and redeploys only the affected microservices. This helps avoid unnecessary full-stack redeploys. We'll also cover real production issues and the exact fixes for each one.

In this tutorial, you'll build a Jenkins instance running inside Docker on the same Linux server as your application stack.

Traefik will act as a reverse proxy in front of Jenkins, exposing it via a clean URL (https://jenkins.example.com) with auto-renewing Let's Encrypt certificates.

You'll also create a Jenkinsfile in your application repository that:

Automatically triggers on every push to the staging branch,

Detects which microservices changed in each commit,

Pulls the latest code on the host machine,

Rebuilds and restarts only the affected services.

On every push, only the relevant services are redeployed.

Before jumping in, this guide assumes you’re already comfortable with a few core concepts and tools.

This isn't a beginner-level tutorial — we’ll be working directly with infrastructure, containers, and CI/CD pipelines.

You should be familiar with:

Basic Linux commands (SSH, file system navigation, permissions)

Docker fundamentals (images, containers, volumes, networks)

Git workflows (clone, pull, branches)

General idea of CI/CD pipelines

Tools and environment required:

A Linux server (Ubuntu recommended)

Docker Engine + Docker Compose (v2)

A domain name (for Traefik + HTTPS)

GitHub repository (for your backend project)

Basic understanding of microservices architecture

If you’re comfortable with the above, you’re ready to follow along.

Here's an overview of the architecture:

There are two key ideas here:

Jenkins runs in a container, but it controls the host's Docker by mounting /var/run/docker.sock. It also bind-mounts the project folder as /projects/..., so it can cd into the real code on the host and run docker compose there.

The Jenkinsfile lives inside the app repo, so the pipeline definition is versioned with the code. Jenkins simply points at it.

Before we start configuring Jenkins or Traefik, we need to prepare the server properly.

In this step, we’ll:

Create a dedicated Linux user for managing the project

Install Docker and Docker Compose

Set up the folder structure for our repositories

This ensures our CI/CD pipeline runs in a clean and predictable environment.

You should now have:

Memorize this path — your Jenkinsfile references it.

Point an A-record for your Jenkins subdomain to the server's public IP before the next steps so Let's Encrypt can validate via HTTP challenge:

Traefik acts as the entry point to your entire system. Instead of exposing each service manually with ports, Traefik automatically:

Routes traffic based on domain names

Generates and renews HTTPS certificates using Let’s Encrypt

Connects to Docker and detects services dynamically

In simple terms, Traefik lets you access services like:

https://jenkins.example.comhttps://api.example.com

…without manually configuring NGINX or managing SSL certificates.

In this setup, Traefik watches Docker containers and routes traffic using labels we'll define later.

Traefik gives every container a real domain and a real cert with zero per-service config — you just add a few labels.

Put this at the root of your infra repo:

Bring it up:

Watch the logs the first time — Traefik will request a cert for the dashboard host as soon as DNS resolves.

Tip. While testing, switch ACME to staging endpoint (acme.caServer=https://acme-staging-v02.api.letsencrypt.org/directory) so you don't burn through Let's Encrypt's rate limits if you misconfigure DNS. Remove that flag before going live.

Add this Jenkins service to the same docker-compose.staging.yml. Every line matters (and the comments explain why).

Why user: root? It's the simplest way to share docker.sock and the project bind-mount without UID/GID gymnastics. If you prefer an unprivileged user, you'll need to set group: docker and align UIDs/perms on host folders — possible but out of scope here.

This is the section many guides skip. We'll add labels to the Jenkins service so Traefik picks it up automatically. No editing of Traefik config required.

What each line does:

Bring Jenkins up:

After 10–60 seconds you should be able to open https://jenkins.example.com and see Jenkins's setup wizard with a valid lock icon.

Inside Jenkins (after first login):

Manage Jenkins → System → Jenkins URL → set this to: https://jenkins.example.com/

This is important because Jenkins uses this base URL to generate:

If this isn't set correctly, GitHub webhooks may fail, and any links Jenkins generates will point to the wrong address (often localhost or internal IPs).

If you're running Jenkins for the first time on this server, follow this section to complete the initial setup.

If you already have Jenkins configured, you can skip this section — but make sure the required plugins and settings match what we use later in this guide.

Open https://jenkins.example.com. Get the initial admin password:

Paste it, choose Install suggested plugins.

Create your admin user.

Manage Jenkins → Plugins → Available and install:

That's all the plugins you need for the rest of this guide.

Jenkins needs permission to access your GitHub repository.

This is done using a GitHub Personal Access Token (PAT), which acts like a password for secure API and Git operations.

We’ll store this token inside Jenkins as a credential so it can pull code during pipeline execution and authenticate securely without exposing secrets in code.

This single credential is used both for the SCM checkout and for the deploy-time git pull.

Create a Personal Access Token (classic) on GitHub with repo scope.

In Jenkins: Manage Jenkins → Credentials → System → Global → Add Credentials.

Fill in:

Kind: Username with password

Username: your GitHub username

Password: the token

ID: github_classic_token (the Jenkinsfile references this exact ID)

Now that Jenkins has access to your repository, the next step is to define how deployments should run.

A pipeline job tells Jenkins:

In Jenkins, create a new Pipeline job and connect it to your GitHub repository. Once this is set up, Jenkins will automatically trigger deployments whenever you push to the staging branch.

Start by creating a new job:

New Item → Pipeline → name it projects-staging → OK

Then configure the job:

Save the configuration.

At this point, Jenkins is fully connected to your repository and ready to run your deployment pipeline automatically.

Place this at the root of the app repo (projects-backend/Jenkinsfile), branch staging.

Why each tricky line is there:

git config --global --add safe.directory ... — git refuses to operate on a repo whose owner UID differs from the current user's. The repo on disk is owned by developer, but Git inside the container runs as root. This whitelists the path.

git remote set-url origin "https://..." — flips the on-disk remote to HTTPS so the token can be used. (A PAT can't authenticate git@github.com: URLs — those use SSH.) Idempotent — safe to re-run.

git -c credential.helper="!f() { echo username=...; echo password=...; }; f" — feeds the username/token to git for that one command without writing the token to disk and without exposing it on the process command line.

${CHANGED_SERVICES} is unquoted on purpose so multiple service names expand as separate args.

Before considering the setup complete, we need to verify that the entire pipeline works as expected.

This end-to-end test ensures that:

GitHub webhooks are triggering Jenkins correctly,

Jenkins can detect which services changed,

and only the affected services are rebuilt and deployed.

In other words, this simulates a real production deployment.

Start by making a small change in your repository. For example, modify a file inside:

apps/gateways/student-apigw/

Then push the change to the staging branch.

Once pushed, Jenkins should automatically trigger via the webhook. If not, you can manually click Build Now.

Now open the build’s Console Output and verify the flow. You should see something like:

Checkout completed for branch: staging

Services to deploy: student-apigw

git pull origin staging (successful)

docker compose ... up -d --build student-apigw

Deployed: student-apigw

If you see this sequence, your pipeline is working correctly.

If anything fails, don’t worry — jump to Section 12 where every common issue and its fix is documented.

This section covers real issues we faced while setting up this pipeline — and more importantly, why each fix works. Understanding the “why” will help you debug similar problems in your own setup.

Cause:The Jenkinsfile runs cd $PROJECT_PATH, but inside the container that path doesn’t exist. This usually happens when:

Fix:

Confirm the bind mount:

If missing, recreate the container:

Why this works:

Jenkins runs inside a container, but your code lives on the host. The bind mount connects them. Without it, Jenkins cannot access your project directory.

Cause:Git blocks access when the repository owner differs from the current user.

Fix:

Why this works:

This explicitly tells Git that the directory is trusted, bypassing ownership mismatch security restrictions.

The repository uses SSH (git@github.com:...), but:

Also, GitHub tokens cannot authenticate over SSH.

Fix (recommended):

Why this works:

HTTPS uses token-based authentication (PAT), which works inside containers without SSH configuration.

Cause:The Docker CLI exists, but the Docker Compose plugin is missing inside the container.

Fix:

Find your path if needed:

Verify:

Why this works:

Docker Compose v2 is a CLI plugin. Mounting this directory makes the docker compose command available inside the container.

Fix: Set both env var and JVM flag, and bind-mount the host's clock files:

You must recreate the container for env-var changes to take effect:

Why this works:Jenkins runs on Java, which uses its own timezone separate from the OS.By aligning OS timezone, JVM timezone, and host clock, you ensure consistent timestamps everywhere.

If you have multiple services building in parallel and each runs pnpm install with ~1500 packages, the network gets saturated and a timeout occurs.

a) Increase timeout + control concurrency

Why: Gives pnpm more time and reduces network overload.

b) Enable pnpm cache (BuildKit)

Why: Dependencies are cached and reused instead of downloading every time.

c) Avoid unnecessary rebuilds

Why: Only changed services are rebuilt → less network load → fewer failures.

Docker compose up -d does not update running containers.

Why this works:

This forces Docker to recreate the container with updated configuration (env, volumes, labels).

DNS not pointing to server Port 80 blocked Wrong Docker network

Why this works:

Let’s Encrypt uses HTTP-01 challenge, so it must reach your server via port 80. If DNS or networking is wrong, certificate issuance fails.

Set the Jenkins URL to https://jenkins.example.com/Ensure header:

Why this works:

Jenkins needs to know it's behind HTTPS. Without this, it generates incorrect URLs (http instead of https), breaking redirects and webhooks.

Many setup mistakes come from confusing the host filesystem with the container filesystem. This table makes it explicit:

When debugging, always ask: "Inside which filesystem is this command running, and does the file/folder it's looking for exist there?"

Pre-build a base image with all node_modules baked in. With ~1500 packages × 15 services, every clean build re-downloads ~22k tarballs. A shared base cuts that 90%.

Run a private npm proxy (Verdaccio / Nexus / GitHub Packages) on the same Docker network — eliminates flaky npmjs.org timeouts entirely.

Per-service Jenkinsfile if your services drift apart in tooling. With one Jenkinsfile, every team contends for the same pipeline definition.

Replace git diff HEAD~1 HEAD with git diff $(git merge-base HEAD origin/staging~1) HEAD so squash-merges and force-pushes don't accidentally skip services.

Move secrets to a vault (HashiCorp Vault / AWS Secrets Manager / Doppler). PATs in Jenkins work, but rotation across many jobs is painful.

Use Jenkins' Configuration-as-Code (JCasC) so the entire Jenkins setup (jobs, credentials definitions, plugins) is in git. Then a server rebuild is a one-command operation.

The pipeline itself is just three stages: Checkout → Detect Changes → Deploy — but a real production setup is mostly about plumbing: reverse proxy, certificates, bind-mounts, credentials, timezones, build caches. None of these are exotic. Together they decide whether your Friday-afternoon deploy goes silently green or eats your weekend.

Follow sections 1–11 to get a working pipeline. Bookmark section 12 to keep it working.

Happy shipping.