FROM node:22.14.0-alpine AS admin_build

RUN corepack enable && corepack prepare pnpm@latest --activate


WORKDIR /app

COPY ./package.json ./

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
