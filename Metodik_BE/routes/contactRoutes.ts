// Metodik_BE/routes/contactRoutes.ts
// This file defines the routes for contact form submissions
import { Router } from 'express';
import contactRouter from '../controllers/contactController';

const router = Router();

router.use('/contact', contactRouter);

export default router;
