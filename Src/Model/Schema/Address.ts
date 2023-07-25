// src/models/user.ts
import { Schema, model, Document ,Types} from 'mongoose';
import IUser from './User'
interface IAddress extends Document {
  userId:  Types.ObjectId | typeof  IUser;// Reference to the User collection;
  address: string;
  country: string;
  state: string;
  createdAt: Date;
  updatedAt: Date;
}

const AddressSchema = new Schema<IAddress>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
    unique: true,
  },
  state: {
    type: String,
    required: true,
  },
},
{ timestamps: true } // Enable timestamps
);

const AddressModel = model<IAddress>('Address', AddressSchema);

export default AddressModel;