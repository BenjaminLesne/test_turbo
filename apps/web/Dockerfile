FROM node:18-alpine AS base


# hadolint ignore=DL3018
RUN apk update && \
    apk add --no-cache libc6-compat curl && \
    npm install -g pnpm@9.11.0 turbo@2.1.2

FROM base AS builder
WORKDIR /code

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
RUN pnpm install --workspace-root && pnpm install --filter web

COPY . .


RUN turbo prune web --docker

FROM base AS installer
WORKDIR /code

COPY --from=builder /code/out/json/ ./
RUN pnpm install

COPY --from=builder /code/out/full/ ./
RUN pnpm turbo build --filter=web...

# FROM base AS runner
# WORKDIR /code

# RUN addgroup --system --gid 1001 nodejs \
#     && adduser --system --uid 1001 nextjs

# USER nextjs

# COPY --from=installer --chown=nextjs:nodejs /code/codes/web/.next/standalone ./
# COPY --from=installer --chown=nextjs:nodejs /code/codes/web/.next/static ./codes/web/.next/static
# COPY --from=installer --chown=nextjs:nodejs /code/codes/web/public ./codes/web/public

WORKDIR /code/apps/web
CMD ["pnpm", "run", "start"]
# CMD ["node", "apps/web/server.js"]
