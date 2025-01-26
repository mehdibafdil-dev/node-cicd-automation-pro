#!/bin/bash
set -e

ENVIRONMENT=$1
VERSION=$2

echo "Deploying version $VERSION to $ENVIRONMENT..."

# Run pre-deployment checks
./scripts/health-check.sh pre-deploy

# Update ECS service
aws ecs update-service \
  --cluster production \
  --service node-app-service \
  --force-new-deployment

# Wait for deployment to complete
aws ecs wait services-stable \
  --cluster production \
  --services node-app-service

# Run post-deployment checks
./scripts/health-check.sh post-deploy

echo "Deployment completed successfully!"