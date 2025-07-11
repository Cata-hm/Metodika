// routes/adminRoutes.ts
import { Router } from 'express';
import { getContacts } from '../controllers/adminController';
import { authMiddleware } from '../middlewares/adminMiddleware';

const adminRouter = Router();

adminRouter.get('/contacts', authMiddleware, getContacts);

export default adminRouter;
