import request from 'supertest';
import app from '../src/app';

describe('App', () => {
  it('should return health check', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'healthy');
  });
});