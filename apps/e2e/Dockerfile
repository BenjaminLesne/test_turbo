FROM mcr.microsoft.com/playwright:v1.45.1-jammy
# TODO:
# make it work so we can run update snapshots on it
# add to scripts: e2e:update:snapshots

WORKDIR /code/web

COPY ./package-lock.json ./package.json ./

RUN npm install -g pnpm@9.11 && pnpm install

WORKDIR /code/frontend/src/lib
COPY ./frontend/src/lib .

WORKDIR /app/frontend/
COPY ./frontend/package.json .

WORKDIR /app/e2e
COPY ./e2e .


CMD ["npx", "playwright", "test", "--update-snapshots"]
