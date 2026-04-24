# SecurityHeaders.com API Is Gone — Here's the Migration

Source: https://dev.to/guardr/securityheaderscom-api-is-gone-heres-the-migration-4461

If you have CI/CD pipelines or scheduled audits built on api.securityheaders.com, now is the time to migrate — the API has been discontinued and no new or renewed subscriptions are being issued. Better to move before your key stops working than after.

The SecurityHeaders.com API has been discontinued — no new subscriptions, no renewals. The free web UI at securityheaders.com is still live, but if your existing key expires you have nowhere to go. This post is a practical migration guide with real before/after curl examples and a working GitHub Actions workflow.

HTTP security headers — things like Content-Security-Policy, Strict-Transport-Security, X-Frame-Options and Permissions-Policy — are one of the easiest ways to harden a website against a whole class of attacks: XSS, clickjacking, protocol downgrade, MIME sniffing and more. Browsers respect them natively, no client-side code required.

The problem is that getting them right is tedious. Each header has its own syntax, edge cases and gotchas. Miss one, misconfigure another, and your security posture quietly regresses with no visible symptoms.

SecurityHeaders.com solved this with a simple letter grade. Paste a URL, get an A–F score and a list of what's missing or misconfigured. The API took that same scan and made it programmable — so developers could:

If any of those sound useful, read on — this guide covers how to replicate them with the Guardr API.

Credit to Scott Helme and the Probely/Snyk team for the generous notice window. The web scanner at securityheaders.com is a genuine contribution to web security and it continues to exist. This is just about replacing the programmatic endpoint.

The most common use case was a single GET per domain returning a grade. Here's the before/after:

Before (SecurityHeaders.com):

After (Guardr API):

Same auth header style, same GET-per-domain pattern. The hide and followRedirects params don't have equivalents — results are private to your account by default and redirects are always followed.

Want to try it without signing up? The GET endpoint works keyless at 20 req/day per IP, returning grade + score only:

Here's a real response from a domain with issues (trimmed but every field name is exact):

A few things worth calling out for developers:

remediation.effort tags every issue as quick-fix, moderate, or requires-planning. Useful for sprint planning — you can filter for quick wins before tackling CSP rollouts.

remediation.warning surfaces the gotchas inline. HSTS warns you about subdomain rollout. CSP warns about third-party integrations breaking. These are the notes that usually live in a senior engineer's head.

remediation.snippets is an array of platform-specific config code — Cloudflare _headers format, Nginx add_header, Apache Header always set. No translating from generic advice.

The key conceptual shift: the old API was header-centric (organized around raw HTTP headers). Guardr is issue-centric (organized around "what's wrong and how to fix it"). Better for CI/CD gating; less useful if you specifically wanted a raw header dump.

Here's a migrated version of the most common CI pattern — nightly scan with grade-based fail:

Add GUARDR_API_KEY to your repo secrets and generate the key in the Guardr dashboard under Settings → API Access.

The GET endpoint returns a cached result (up to an hour old). For CI runs where you want a live scan, use the POST endpoint:

POST scans complete in 5–15 seconds. Note the per-domain scan quota — on Free that's once every 7 days, on Solo once every 24 hours. For large sweeps, trigger one POST per domain then use GET for all subsequent reads.

Every response includes X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset and Retry-After on 429s. Respect Retry-After — don't hammer on rate limit errors.

Beyond security headers, a Guardr scan also checks:

Guardr is the closest drop-in for the grade-based API + remediation use case. For deep TLS work, SSL Labs is still the right tool. For manual spot checks, Mozilla Observatory is free and great.

I'm Anatoli, building Guardr solo. The API launched this month specifically to give SecurityHeaders.com users somewhere to land. If there's an endpoint or feature from the old API that doesn't have a Guardr equivalent and it's blocking your migration, drop me a message — I want to hear about it.

Full docs and response samples: guardr.io/docs/api