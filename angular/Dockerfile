# Stage 1 - Build React App inside temporary Node container
# FROM node:carbon-alpine as react-build
FROM node:current-alpine3.14 as builder

WORKDIR /usr/src/app
COPY . ./
RUN npm install
RUN npm run ng build  --prod

# Stage 2 - Deploy with NGNIX
FROM nginx:latest

COPY --from=builder /usr/src/app/dist/angular-app /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

ENTRYPOINT ["nginx","-g","daemon off;"]
