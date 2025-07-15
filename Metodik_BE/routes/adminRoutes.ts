// routes/adminRoutes.ts
// This file defines the routes for admin-related actions
import { Router } from 'express';
import { getContacts } from '../controllers/adminController';
import { authMiddleware } from '../middlewares/adminMiddleware';

const adminRouter = Router();

adminRouter.get('/contacts', authMiddleware, getContacts);

export default adminRouter;
