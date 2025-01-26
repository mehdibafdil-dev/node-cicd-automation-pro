import { Request, Response } from 'express';
import { HealthService } from '../services/monitoring';

export class HealthController {
  static async check(req: Request, res: Response) {
    const status = await HealthService.checkSystem();
    res.status(200).json(status);
  }
}