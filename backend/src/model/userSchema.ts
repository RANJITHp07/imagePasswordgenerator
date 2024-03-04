import mongoose, { Schema, Document } from 'mongoose';

// Define interface for User document
interface User extends Document {
    email: string;
    password: string;
    username: string;
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true }
});

export default mongoose.model<User>('User', UserSchema);
