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
mv frontend/.sample.env frontend/.env && \
direnv allow frontend/.
```
