import { HealthService } from '../../src/services/monitoring';

describe('HealthService', () => {
  it('should return system status', async () => {
    const status = await HealthService.checkSystem();
    expect(status).toHaveProperty('status');
  });
});