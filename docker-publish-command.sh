#!/bin/sh

set -e

REGISTRY_CONFIGS=$(echo $PUBLISH_CONFIG | jq -rc '.[]')

NUM_LINES=$(echo "$REGISTRY_CONFIGS" | wc -l)

echo ''
LINE_INDEX=1

# Iterate over each publish config
echo "$REGISTRY_CONFIGS" \
| while read -r REGISTRY_CONFIG;
do

	NPM_SCOPE=$(echo $REGISTRY_CONFIG | jq -r '.scope')
	NPM_REGISTRY=$(echo $REGISTRY_CONFIG | jq -r '.registry')
	NPM_TOKEN=$(echo $REGISTRY_CONFIG | jq -r '.token')

	echo '-- '"$LINE_INDEX"' / '"$NUM_LINES"' : '"$NPM_REGISTRY"' --'

	if [ "$NPM_TOKEN" = '$GITHUB_TOKEN' ]; then
		NPM_TOKEN=${GITHUB_TOKEN:-}
	fi

	if [ -z "$NPM_REGISTRY" ]; then
		echo 'Error: Skip registry: Registry is not set'
		continue
	fi

	if [ -z "$NPM_TOKEN" ]; then
		echo 'Warning: Skip registry: Token is not set'
		continue
	fi

	# Set npm registry & auth token
	npm config set registry "$NPM_REGISTRY"'/:_authToken='"$NPM_TOKEN"

	# Publish package
	npm publish

	echo ''
	LINE_INDEX=$((LINE_INDEX + 1))

done
