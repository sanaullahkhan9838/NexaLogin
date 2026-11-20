# Nexalogin — Front-end Demo

A responsive HTML, CSS, and JavaScript authentication-interface learning project.

## Important security note

This repository is a **front-end-only educational demo**:
- It does not authenticate users.
- It does not create accounts.
- It does not send, store, or log passwords or personal information.
- The Google button and password-recovery form are visual demonstrations only.
- Do not enter real passwords or personal information.

A real authentication system needs a properly secured backend, HTTPS, safe password hashing, session management, CSRF protections, rate limiting, and a properly configured identity provider for OAuth. Do not implement real authentication by simply adding client-side JavaScript.

## Run locally

Open the folder in VS Code and use a local development server, or run a simple static server from the project folder:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080.

## GitHub Pages

Upload the project files to the root of your GitHub Pages repository. Keep `index.html` at the repository root.

## Google Safe Browsing warning

Cleaning these project files does **not** guarantee that Google will remove a warning. Check every file and commit in the published repository, any custom domain/DNS settings, and the Google Safe Browsing site-status report. If you confirm the site is clean, use Google Search Console's Security issues / review process. Do not ask visitors to bypass browser warnings.
