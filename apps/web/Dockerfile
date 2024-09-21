FROM node:18-alpine AS base

RUN apk update \
    apk add --no-cache libc6-compat \
    npm install -g pnpm turbo

FROM base AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml turbo.json ./
RUN pnpm install

COPY . .


RUN turbo prune web --docker

FROM base AS installer
WORKDIR /app

COPY --from=builder /app/out/json/ ./
RUN pnpm install

COPY --from=builder /app/out/full/ ./
RUN pnpm turbo build --filter=web...

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

USER nextjs

COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

CMD ["node", "apps/web/server.js"]
