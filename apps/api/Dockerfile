FROM node:18-alpine AS base

# hadolint ignore=DL3018
RUN apk update && \
    apk add --no-cache libc6-compat curl && \
    npm install -g pnpm@9.11.0 turbo@2.1.2

FROM base AS builder
WORKDIR /code

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
RUN pnpm install --workspace-root && pnpm install --filter api

COPY . .


RUN turbo prune api --docker

FROM base AS installer
WORKDIR /code

COPY --from=builder /code/out/json/ ./
RUN pnpm install

COPY --from=builder /code/out/full/ ./
RUN pnpm turbo build --filter=api...

WORKDIR /code/apps/api
CMD ["pnpm", "run", "start:prod"]
