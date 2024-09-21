# the context of this dofkcerfile is the root git repo

FROM mcr.microsoft.com/playwright:v1.47.2-jammy 

WORKDIR /code

COPY ./pnpm-lock.yaml ./package.json ./pnpm-workspace.yaml ./

RUN npm install -g pnpm@9.11 

WORKDIR /code/apps/web/src/lib
COPY ./apps/web/src/lib .

WORKDIR /code/apps/web/
COPY ./apps/web/package.json .

WORKDIR /code/packages/eslint-config
COPY ./packages/eslint-config .

WORKDIR /code/apps/e2e
COPY ./apps/e2e .
RUN pnpm install --filter e2e


CMD ["npx", "playwright", "test", "--update-snapshots"]
