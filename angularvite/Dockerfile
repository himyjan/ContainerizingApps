# FROM ubuntu:latest
# WORKDIR /opt/app

# RUN apt-get update
# RUN apt-get upgrade -y
# RUN apt-get install -y curl unzip
# RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash
# RUN apt-get install -y nodejs

# ENV BUNPATH /root/.bun
# ENV PATH $BUNPATH/bin:$PATH
# ENV BUN_VERSION = $(eval bun -v)
# RUN curl -fsSL https://bun.sh/install | bash
# RUN ln -s $BUNPATH/bin/bun /usr/local/bin/bun

# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app
# RUN cd /usr/src/app

# COPY package.json /usr/src/app
# COPY . ./
# RUN bun install
# EXPOSE 3000
## RUN npm run dev

#docker build --no-cache . |  grep "Successfully built" | sed 's/Successfully built //g' | xargs -I{} docker run {}

# Stage 1 - Build React App inside temporary Node container
# ### GET ###
# FROM alpine:latest as get

# # prepare environment
# WORKDIR /tmp
# RUN apk --no-cache add unzip

# # get bun
# ADD https://github.com/oven-sh/bun/releases/latest/download/bun-linux-aarch64.zip bun-linux-aarch64.zip
# RUN unzip bun-linux-aarch64.zip

# ### IMAGE ###
# FROM debian:bookworm-slim as react-build

# # install bun
# COPY --from=get /tmp/bun-linux-aarch64/bun /usr/local/bin

# RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
# RUN apt-get update -y && apt-get upgrade -y
# RUN apt-get install -y nodejs

# # smoke test
# RUN bun --version

# Stage 1 - Build React App inside temporary Node container
FROM node:alpine as builder
WORKDIR /usr/src/app
COPY package.json /app
COPY . ./
RUN npm install -g pnpm
RUN pnpm install
EXPOSE 3000
# RUN npm run dev

# Stage 2 - Deploy with NGNIX
# FROM nginx:latest

# COPY --from=builder /usr/src/app/dist/angular-app /var/www
# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 3000

# ENTRYPOINT ["nginx","-g","daemon off;"]
