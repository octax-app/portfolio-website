# syntax=docker/dockerfile:1

# ---- 1. Build the static site ------------------------------------------------
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies first so this layer is cached until the lockfile changes.
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund

COPY . .
RUN npm run build \
 && test -f build/index.html \
 && test -f build/sitemap.xml \
 && test -f build/llms.txt

# ---- 2. Serve it with nginx ---------------------------------------------------
FROM nginx:alpine
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/snippets/ /etc/nginx/snippets/
COPY --from=build /app/build /var/www/build

# Fail the image build if the config is invalid.
RUN nginx -t

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/healthz || exit 1
