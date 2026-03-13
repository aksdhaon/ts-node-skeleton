# ts-node-skeleton

A minimal TypeScript + Node.js skeleton application with Express, ESLint, Prettier, and Jest.

## Prerequisites

- Node.js 20+
- npm 10+
- `mkcert`

## Local HTTPS setup

### Windows

Install and trust the local CA once:

```powershell
npm.cmd run cert:install-ca:windows
```

Generate repo-local certificates:

```powershell
npm.cmd run cert:generate:windows
```

If PowerShell blocks `npm.ps1`, use `npm.cmd` instead of `npm`.

### macOS

Install `mkcert` if needed:

```bash
brew install mkcert
```

Trust the local CA once:

```bash
mkcert -install
```

Generate repo-local certificates:

```bash
npm run cert:generate
```

## Setup

### Windows

```powershell
npm.cmd install
npm.cmd run cert:install-ca:windows
npm.cmd run cert:generate:windows
```

### macOS

```bash
npm install
mkcert -install
npm run cert:generate
```

## Run the app

### Windows

```powershell
npm.cmd run dev
```

### macOS

```bash
npm run dev
```

Health endpoint:

```text
GET https://localhost:3000/health
```

The server runs with HTTPS and expects certificate files at:

```text
certs/localhost.key
certs/localhost.crt
```

You can override these paths with environment variables.

### Windows

```powershell
$env:HTTPS_KEY_PATH="C:\path\to\key.pem"
$env:HTTPS_CERT_PATH="C:\path\to\cert.pem"
npm.cmd run dev
```

### macOS

```bash
HTTPS_KEY_PATH=/path/to/key.pem HTTPS_CERT_PATH=/path/to/cert.pem npm run dev
```

## Scripts

### Windows

```powershell
npm.cmd run cert:install-ca:windows # trust mkcert local CA
npm.cmd run cert:generate:windows   # generate local trusted HTTPS certificates
npm.cmd run dev                     # run in watch mode with tsx
npm.cmd run build                   # compile TypeScript to dist/
npm.cmd run start                   # run compiled output
npm.cmd run typecheck               # type check without emitting
npm.cmd run lint                    # lint TypeScript source files
npm.cmd run format                  # format all files with Prettier
npm.cmd run format:check            # verify formatting
npm.cmd run test                    # run Jest tests
npm.cmd run test:watch              # run tests in watch mode
```

### macOS

```bash
mkcert -install           # trust mkcert local CA (one-time)
npm run cert:generate     # generate local trusted HTTPS certificates
npm run dev               # run in watch mode with tsx
npm run build             # compile TypeScript to dist/
npm run start             # run compiled output
npm run typecheck         # type check without emitting
npm run lint              # lint TypeScript source files
npm run format            # format all files with Prettier
npm run format:check      # verify formatting
npm run test              # run Jest tests
npm run test:watch        # run tests in watch mode
```

## Project Structure

```text
src/
  app.ts
  index.ts
scripts/
  generate-cert.mjs
test/
  app.test.ts
dist/
```
