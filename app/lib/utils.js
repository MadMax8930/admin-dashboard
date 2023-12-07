import mongoose from 'mongoose'

export const connectToDB = async () => {
   try {
      if (mongoose.connection.readyState === 1) {
         console.log('Already connected to the database');
         return;
      }

      await mongoose.connect(process.env.MONGODB_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });

      connection.isConnected = mongoose.connection.readyState;
      console.log("Connection established to the database");
   } catch (error) {
      console.error('Error connecting to the database:', error.message);
      throw new Error(error.message);
   }
}