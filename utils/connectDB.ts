import mongoose from 'mongoose';

const uri = process.env.MONGO_URI!;
console.log(uri);
let clientPromise: Promise<typeof mongoose>;

clientPromise = mongoose.connect(uri);

export default clientPromise;
