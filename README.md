# frontend-template

My boilerplate for frontend

## Set up

### volta

- install volta
  - see: https://docs.volta.sh/guide/getting-started

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
  - see: https://github.com/direnv/direnv/blob/master/docs/installation.md

```bash
# if you use mac
brew install direnv
```

- allow direnv

```bash
cp .sample.env .env && \
direnv allow .
```

## optional: install vscode extensions

if you use vscode, you can install extensions below.

- ESlint
  - <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>
- Prettier
  - <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>
