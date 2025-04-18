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
# Build dev image

FROM app_build_base AS app_build_dev

# Copy app build configuration
COPY --link ./app/package.json ./app/pnpm-lock.yaml ./

# Install app development dependencies
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
	pnpm install --frozen-lockfile


# --
# CLI image

FROM app_build_base AS app_cli

# Build arguments
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
# Test image

FROM app_dev AS app_test

ENV APP_ENV=test

# Install jq
RUN --mount=type=cache,target=/var/cache/apt \
	--mount=type=cache,target=/var/lib/apt \
	apt-get update && apt-get install -y jq

COPY --link --chmod=755 ./docker/test-command.sh /usr/local/bin/app-test-command
CMD [ "app-test-command" ]


# --
# Dev image

FROM app_base AS app_dev

# Build arguments
ARG UID

# Set runtime environment
ENV APP_ENV=dev
ENV NODE_ENV=development

# Copy app development dependencies
COPY --link --from=app_build_dev --chown="${UID}:0" /app/node_modules ./node_modules

# Copy source code
COPY --link --chown="${UID}:0" ./app .

# Create user 'user' in group 'root'
RUN USERNAME="$(getent passwd "${UID}" | cut -d: -f1)"; \
	if [ -z "${USERNAME}" ]; then \
		useradd -lm -u "${UID}" -g "${UID}" -G 0 user; \
	else \
		usermod -a -G 0 "${USERNAME}"; \
	fi

# Run as non-root user
USER ${UID}:0

# Set exposed port
ARG PORT=8080
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD [ "npm", "start" ]
