// src/models/user.ts
import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  fname: string;
  lname: string;
  father_name: string;
  education: string;
  email: string;
  address: string;
}

const UserSchema = new Schema<IUser>({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  father_name: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  
} , 
 { timestamps: true } // Enable timestamps
);

const UserModel = model<IUser>('User', UserSchema);

export default UserModel;