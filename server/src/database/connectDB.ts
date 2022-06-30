import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}${process.env.DB_CLUSTER}.u9jyq.mongodb.net/?retryWrites=true&w=majority`;

export const connectDB = async () => {
  const client = await MongoClient.connect(uri);
  const db = client.db('airbnb-clone');
  return {
    listings: db.collection('listings'),
  };
};
