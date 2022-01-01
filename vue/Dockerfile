# FROM node:lts-alpine as builder
# WORKDIR /usr/src/app
# COPY . ./
# RUN npm install
# RUN npm run build
# FROM nginx:alpine
# COPY --from=builder /usr/src/app/dist /var/www
# COPY nginx.conf /etc/nginx/nginx.conf
# EXPOSE 3000
# ENTRYPOINT ["nginx","-g","daemon off;"]



# Stage 1 - Build React App inside temporary Node container
FROM node:current-alpine3.14 as builder

WORKDIR /usr/src/app
COPY . ./
RUN npm install
RUN npm run-script build

# Stage 2 - Deploy with NGNIX
FROM nginx:1.21.5

COPY --from=builder /usr/src/app/dist /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

ENTRYPOINT ["nginx","-g","daemon off;"]
