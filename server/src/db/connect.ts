import mongoose from 'mongoose';
import {keys} from '../config';

export const connectToDB = async () => {
    try {
        await mongoose.connect(keys.MONGODB_URL);
        console.log('DB connected successfully....');
    } catch (error) {
        console.log('Error when connecting to DB....', error);
    }
}