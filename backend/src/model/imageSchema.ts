import mongoose, { Schema, Document } from 'mongoose';

export interface ImageDocument extends Document {
  user_id: mongoose.Types.ObjectId;
  file_name: string,
  image_name: string;
  code: string;
}

const ImageOtpSchema: Schema = new Schema({
  user_id: { type: mongoose.Types.ObjectId, required: true },
  file_name: { type: String, required: true },
  imageName:{type: String, required: true },
  code: { type: String, required: true }
});

const ImageOtpModel = mongoose.model<ImageDocument>('ImageOtp', ImageOtpSchema);

export default ImageOtpModel;
