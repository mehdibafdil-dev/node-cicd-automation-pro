import { logger } from './logger';

export class MetricsLogger {
  static trackDeployment(version: string, environment: string) {
    logger.info('Deployment tracked', { version, environment });
  }

  static trackApiRequest(endpoint: string, duration: number) {
    logger.info('API request tracked', { endpoint, duration });
  }
}