# Only installing dependencies
FROM node:alpine AS deps
# RUN mkdir /app
WORKDIR /app
COPY package.json package-*.json ./
RUN npm ci

# Rebuild the source code only when changed
FROM node:alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM deps as dev
ENV NODE_ENV=development
EXPOSE 3001 
CMD ["npm","run", "start"]

# Production image, copy all the files and run react-scripts
FROM nginx:alpine AS production
WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .
# COPY --from=builder /app/conf/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]