import { Request, Response } from 'express';
import { db } from '../db/connect';

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contactsCollection = db.collection('contacts');
    const contacts = await contactsCollection.find().sort({ date: -1 }).toArray();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error al obtener contactos', error: err });
  }
};
