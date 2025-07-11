import { Router } from 'express';
import contactRouter from '../controllers/contactController';

const router = Router();

router.use('/contact', contactRouter);

export default router;
