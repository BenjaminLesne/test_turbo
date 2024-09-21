# the context of this dofkcerfile is the root git repo

FROM mcr.microsoft.com/playwright:v1.46.0-noble
# TODO:
# make it work so we can run update snapshots on it
# add to scripts: e2e:update:snapshots

WORKDIR /code

COPY ./pnpm-lock.json ./package.json ./pnpm-workspace.yaml ./

RUN npm install -g pnpm@9.11 && pnpm install

WORKDIR /code/apps/web/src/lib
COPY ./apps/web/src/lib .

WORKDIR /code/apps/web/
COPY ./apps/web/package.json .

WORKDIR /code/apps/e2e
COPY ./apps/e2e .


CMD ["npx", "playwright", "test", "--update-snapshots"]
