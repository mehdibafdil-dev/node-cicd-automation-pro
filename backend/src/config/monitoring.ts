import * as dd from 'dd-trace';
import { logger } from '../utils/logger';

export const setupMonitoring = () => {
  try {
    dd.init({
      env: process.env.NODE_ENV,
      service: 'node-cicd-app',
      version: process.env.APP_VERSION,
      logInjection: true
    });

    logger.info('DataDog monitoring initialized');
  } catch (error) {
    logger.error('Failed to initialize monitoring:', error);
  }
};