echo "Creatig env file..."

BRIDGE_USER_AUTH="disabled"
echo BRIDGE_USER_AUTH=$BRIDGE_USER_AUTH > scripts/env.list

BRIDGE_K8S_MODE="off-cluster"
echo BRIDGE_K8S_MODE=$BRIDGE_K8S_MODE >> scripts/env.list

BRIDGE_K8S_AUTH="bearer-token"
echo BRIDGE_K8S_AUTH=$BRIDGE_K8S_AUTH >> scripts/env.list

BRIDGE_K8S_MODE_OFF_CLUSTER_SKIP_VERIFY_TLS=true
echo BRIDGE_K8S_MODE_OFF_CLUSTER_SKIP_VERIFY_TLS=$BRIDGE_K8S_MODE_OFF_CLUSTER_SKIP_VERIFY_TLS >> scripts/env.list

BRIDGE_K8S_MODE_OFF_CLUSTER_ENDPOINT=$(oc whoami --show-server)
echo BRIDGE_K8S_MODE_OFF_CLUSTER_ENDPOINT=$BRIDGE_K8S_MODE_OFF_CLUSTER_ENDPOINT >> scripts/env.list

THANOS_URL=$(oc -n openshift-config-managed get configmap monitoring-shared-config -o jsonpath=\"{.data.thanosPublicURL}\")
BRIDGE_K8S_MODE_OFF_CLUSTER_THANOS=${THANOS_URL/\/api/""}
echo BRIDGE_K8S_MODE_OFF_CLUSTER_THANOS=$BRIDGE_K8S_MODE_OFF_CLUSTER_THANOS >> scripts/env.list

ALERTMANAGER_URL=$(oc -n openshift-config-managed get configmap monitoring-shared-config -o jsonpath=\"{.data.alertmanagerPublicURL}\")
BRIDGE_K8S_MODE_OFF_CLUSTER_ALERTMANAGER=${ALERTMANAGER_URL/\/api/""}
echo BRIDGE_K8S_MODE_OFF_CLUSTER_ALERTMANAGER=$BRIDGE_K8S_MODE_OFF_CLUSTER_ALERTMANAGER >> scripts/env.list

BRIDGE_K8S_AUTH_BEARER_TOKEN=$(oc whoami --show-token 2>/dev/null)
echo BRIDGE_K8S_AUTH_BEARER_TOKEN=$BRIDGE_K8S_AUTH_BEARER_TOKEN >> scripts/env.list

BRIDGE_USER_SETTINGS_LOCATION="localstorage"
echo BRIDGE_USER_SETTINGS_LOCATION=$BRIDGE_USER_SETTINGS_LOCATION >> scripts/env.list

BRIDGE_PLUGIN_PROXY="{\"services\": [{\"consoleAPIPath\": \"/api/proxy/plugin/logging-view-plugin/backend/\",\"endpoint\": \"http://host.docker.internal:3100\"}]}"
echo BRIDGE_PLUGIN_PROXY=$BRIDGE_PLUGIN_PROXY >> scripts/env.list

BRIDGE_PLUGINS="logging-view-plugin=http://host.docker.internal:9001"
echo BRIDGE_PLUGINS=$BRIDGE_PLUGINS >> scripts/env.list
