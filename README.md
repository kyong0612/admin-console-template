# admin-console-template

My boilerplate for admin console

## Set up

### volta

- install volta
  - see: <https://docs.volta.sh/guide/getting-started>

```bash
# if your unix user
curl https://get.volta.sh | bash
```

### pnpm

- install pnpm

```bash
volta install pnpm
```

### direnv

- install direnv
  - see: <https://github.com/direnv/direnv/blob/master/docs/installation.md>

```bash
# if you use mac
brew install direnv
```

- allow direnv

```bash
cp .sample.env .env \
direnv allow .
```

### playwright

```bash

npx playwright install

```

### node_modules

```bash
pnpm install
```

### optional: install vscode extensions

if you use vscode, you can install extensions below.

- ESlint
  - <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>
- Prettier
  - <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>

## Run Server

- dev server
  - run `pnpm dev`
    - dev server is running by turbopack

- docker compose
  - run `pnpm run`
    - container is build and run by docker compose
      - WARNING: is not run hot reload
        - can check build available

## URL by pathpiad

- [pathpida](https://github.com/aspida/pathpida) is generator type safe path by directories.
  - when run `pnpm dev`, `utils/$path.ts` is generated and update by coding.

## GraphQL

### generate by schema

- [graphql-codegen](https://github.com/dotansimha/graphql-code-generator) create typescript code by graphql schema.
  - to generate, run `pnpm codegen`

## Test

- run `pnpm test:unit`
  - use [vitest](https://vitest.dev/) for unit test
    - vitest read src/*.test.ts, and run unit test.

- run `pnpm test:e2e`
  - use [playwright](https://playwright.dev/) for e2e test
    - playwright read e2e/*.spec.ts, and run e2e test.

## Styling

- Chakra UI
  - see: <https://chakra-ui.com//>
  - Chakra UI is not support RSC(Rect Server Component)
  - so, when render Chakra UI component, you need to RCC(React Client Component)
    - see: <https://chakra-ui.com/getting-started/nextjs-guide#app-directory-setup>
  - Chakra UI Template help you
    - see: <https://chakra-templates.dev/>
