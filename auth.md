# Auth setup

Unread uses InstantDB auth. Magic-code auth works with only the Instant app id. Google OAuth is optional and becomes available when the Google env vars are present.

## Required for any auth

Add this to `.env`:

```bash
VITE_INSTANT_APP_ID=your-instant-app-id
```

Find this in the Instant dashboard for the app.

## Optional Google OAuth env vars

Add both values to enable the Google button on `/login`:

```bash
VITE_GOOGLE_CLIENT_ID=your-google-web-oauth-client-id
VITE_INSTANT_GOOGLE_CLIENT_NAME=your-instant-google-client-name
```

If either value is missing, the app automatically falls back to magic-code auth.

## Google Console setup

Create a Google OAuth client:

1. Open Google Cloud Console and go to APIs & Services > Credentials.
2. Configure the OAuth consent screen if it does not exist yet.
3. Create credentials > OAuth client ID.
4. Select `Web application`.
5. Add this Authorized redirect URI:

```text
https://api.instantdb.com/runtime/oauth/callback
```

6. Add Authorized JavaScript origins for local development:

```text
http://localhost
http://localhost:3000
http://localhost:3001
```

7. Add the production website origin when deployed.

Copy the Google Client ID into `VITE_GOOGLE_CLIENT_ID`.

## Instant dashboard setup

In the Instant dashboard for this app:

1. Open the Auth tab.
2. Click Set up Google.
3. Enter the Google Client ID.
4. Enter the Google Client Secret.
5. Confirm the redirect URI was added in Google.
6. Save the client.
7. Copy the client name shown/created in Instant into `VITE_INSTANT_GOOGLE_CLIENT_NAME`.

Also add redirect origins in Instant Auth for each web origin:

```text
http://localhost:3000
http://localhost:3001
https://your-production-domain.com
```

## App behavior

- With `VITE_INSTANT_APP_ID` only: `/login` uses magic-code email auth.
- With `VITE_INSTANT_APP_ID`, `VITE_GOOGLE_CLIENT_ID`, and `VITE_INSTANT_GOOGLE_CLIENT_NAME`: `/login` shows Google sign-in first and keeps magic code as a fallback.
- With no `VITE_INSTANT_APP_ID`: `/login` shows the Instant setup screen.

