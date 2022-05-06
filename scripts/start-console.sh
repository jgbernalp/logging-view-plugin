#!/usr/bin/env bash

set -euo pipefail

CONSOLE_IMAGE=${CONSOLE_IMAGE:="quay.io/openshift/origin-console:latest"}
CONSOLE_PORT=${CONSOLE_PORT:=9000}

echo "Starting local OpenShift console..."
echo "Console Image: $CONSOLE_IMAGE"
echo "Console URL: http://localhost:${CONSOLE_PORT}"

# Prefer podman if installed. Otherwise, fall back to docker.
# if [ -x "$(command -v podman)" ]; then
#     if [ "$(uname -s)" = "Linux" ]; then
#         # Use host networking on Linux since host.containers.internal is unreachable in some environments.
#         BRIDGE_PLUGINS="logging-view-plugin=http://localhost:9001"
#         podman run --pull always --rm --network=host  --env-file ./env.list $CONSOLE_IMAGE
#     else
#         BRIDGE_PLUGINS="logging-view-plugin=http://host.containers.internal:9001"
#         podman run --pull always --rm -p "$CONSOLE_PORT":9000 --env-file ./env.list $CONSOLE_IMAGE
#     fi
# else
    docker run --pull always --rm -p "$CONSOLE_PORT":9000 --env-file ./scripts/env.list $CONSOLE_IMAGE
# fi
