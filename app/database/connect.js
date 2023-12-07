import mongoose from 'mongoose'

export const connectToDB = async () => {
   let connection = {};

   try {
      if (mongoose.connections[0].readyState === 1) {
         console.log('Already connected to the database');
         return;
      }

      await mongoose.connect(process.env.MONGODB_URI);

      connection.isConnected = mongoose.connections[0].readyState;
      console.log("Connection established to the database");
   } catch (error) {
      console.error('Error connecting to the database:', error.message);
      throw new Error(error.message);
   }
}