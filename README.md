# ts-node-skeleton

A minimal TypeScript + Node.js skeleton application with Express, ESLint, Prettier, and Jest.

## Prerequisites

- Node.js 20+
- npm 10+

## Setup

```bash
npm install
npm run cert:generate
```

## Run the app

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

You can override these paths with environment variables:

```bash
HTTPS_KEY_PATH=/path/to/key.pem HTTPS_CERT_PATH=/path/to/cert.pem npm run dev
```

## Scripts

```bash
npm run cert:generate # generate local self-signed HTTPS certificates
npm run dev          # run in watch mode with tsx
npm run build        # compile TypeScript to dist/
npm run start        # run compiled output
npm run typecheck    # type check without emitting
npm run lint         # lint TypeScript source files
npm run format       # format all files with Prettier
npm run format:check # verify formatting
npm run test         # run Jest tests
npm run test:watch   # run tests in watch mode
```

## Project Structure

```text
src/
  app.ts
  index.ts
test/
  app.test.ts
dist/
```
