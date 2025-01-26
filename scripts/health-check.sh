#!/bin/bash
set -e

CHECK_TYPE=$1
API_ENDPOINT="https://api.yourapp.com/health"
MAX_RETRIES=30
RETRY_INTERVAL=10

check_health() {
  response=$(curl -s -o /dev/null -w "%{http_code}" $API_ENDPOINT)
  return $([ $response -eq 200 ])
}

echo "Running $CHECK_TYPE health checks..."
count=0

while [ $count -lt $MAX_RETRIES ]; do
  if check_health; then
    echo "Health check passed!"
    exit 0
  fi
  
  echo "Health check failed, retrying in $RETRY_INTERVAL seconds..."
  sleep $RETRY_INTERVAL
  count=$((count + 1))
done

echo "Health check failed after $MAX_RETRIES attempts"
exit 1