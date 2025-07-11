import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes';
import { connectToDB } from './db/connect';
import adminRouter from './routes/adminRoutes';

// Configuración del servidor
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', contactRoutes);
app.use('/api/admin', adminRouter);

// Conexión a la DB y arranque del servidor
connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}).catch(() => {
  console.log('❌ Failed to start server due to DB error');
});
