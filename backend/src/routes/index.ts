import { Router } from 'express';
import { HealthController } from '../controllers/healthController';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.get('/health', HealthController.check);
router.use('/protected', authMiddleware);

export default router;