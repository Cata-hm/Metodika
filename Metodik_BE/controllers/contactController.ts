// controllers/contactController.ts
// This controller handles contact form submissions
import { Router } from 'express';
import nodemailer from 'nodemailer';
import { db } from '../db/connect';

const contactRouter = Router();

contactRouter.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Faltan datos obligatorios' });
  }

  try {
    // 1. Guardar en MongoDB (colección 'contacts')
    const contactsCollection = db.collection('contacts');
    await contactsCollection.insertOne({ name, email, message, date: new Date() });

    // 2. Enviar email con nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // tu correo Gmail (el que manda)
        pass: process.env.EMAIL_PASS, // tu contraseña o app password
      },
    });

    const mailOptions = {
      from: email, // correo del visitante
      to: process.env.EMAIL_USER, // tu correo Gmail que recibe el mensaje
      subject: `[Metodika] Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Mensaje enviado y guardado correctamente.' });

  } catch (error) {
    console.error('Error en /contact:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
});

export default contactRouter;
