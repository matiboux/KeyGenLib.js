#syntax=docker/dockerfile:1

# This Dockerfile uses the root folder as context.


# --
# Upstream images

FROM node:20-slim AS node_upstream


# --
# Npm image

FROM node_upstream AS npm

# Create app directory
WORKDIR /app

# Source code should be mounted here
VOLUME /app

COPY --link --chmod=755 ./docker-npm-entrypoint.sh /usr/local/bin/docker-npm-entrypoint

ENTRYPOINT [ "docker-npm-entrypoint" ]
CMD [ "--help" ]


# --
# Base image

FROM node_upstream AS app_base

# Create app directory
WORKDIR /app


# --
# Dev image

FROM app_base AS app_dev

ENV APP_ENV=dev
ENV NODE_ENV=development

# Install dev dependencies
RUN --mount=type=bind,source=./package.json,target=./package.json \
	--mount=type=bind,source=./package-lock.json,target=./package-lock.json \
	--mount=type=cache,target=/root/.npm \
	npm clean-install --include=dev

# Copy source code
COPY --link . .

CMD [ "npm", "start" ]


# --
# Test image

FROM app_dev AS app_test

ENV APP_ENV=test

CMD [ "npm", "test" ]
