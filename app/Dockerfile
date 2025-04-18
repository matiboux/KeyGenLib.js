#syntax=docker/dockerfile:1

# This Dockerfile uses the service folder as context.


# --
# Global build arguments

ARG UID=1001


# --
# Upstream images

FROM node:22-slim AS node_upstream


# --
# Base image

FROM node_upstream AS app_base

# Set app directory
WORKDIR /app

# Use temporary directory as home
ENV HOME=/tmp


# --
# Build base image

FROM app_base AS app_build_base

# Install pnpm
RUN --mount=type=cache,target=~/.npm \
	npm install -g pnpm


# --
# CLI image

FROM app_build_base AS app_cli

ARG UID

# Run as non-root user
USER ${UID}:0

# Mount source code
VOLUME /app

# Run CLI command
COPY --link --chmod=755 ./docker/cli-entrypoint.sh /usr/local/bin/app-cli-entrypoint
ENTRYPOINT [ "app-cli-entrypoint" ]
CMD [ "--help" ]


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
COPY --link ./app .

CMD [ "npm", "start" ]


# --
# Test image

FROM app_dev AS app_test

ENV APP_ENV=test

# Install jq
RUN --mount=type=cache,target=/var/cache/apt \
	--mount=type=cache,target=/var/lib/apt \
	apt-get update && apt-get install -y jq

COPY --link --chmod=755 ./docker/test-command.sh /usr/local/bin/app-test-command
CMD [ "app-test-command" ]
