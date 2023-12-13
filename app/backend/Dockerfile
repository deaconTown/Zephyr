FROM node:alpine AS dependencies
ENV NODE_ENV=production
WORKDIR /app
COPY package.json package-*.json ./
RUN npm ci

FROM node:alpine AS dev
WORKDIR /app
# ENV NODE_ENV=development
ENV  DEBUG=backend:*
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
CMD ["npm","run", "start"]

FROM node:alpine AS production
WORKDIR /app
# ENV NODE_ENV=production
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
EXPOSE 3000 
CMD ["npm","run", "start"]