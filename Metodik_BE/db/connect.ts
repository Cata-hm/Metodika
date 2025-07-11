import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI as string);

export async function connectToDB() {
  try {
    await client.connect();
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err);
    throw err;
  }
}

export const db = client.db('metodika');
