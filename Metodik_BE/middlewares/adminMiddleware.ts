import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  console.log('Token recibido:', token);
  console.log('Token esperado:', `Bearer ${process.env.ADMIN_TOKEN}`);

  if (token !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  next();
};
