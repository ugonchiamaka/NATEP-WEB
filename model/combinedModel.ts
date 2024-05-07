// models/Post.ts
import mongoose, { Document, Schema } from "mongoose";

const CombinedSchema = new mongoose.Schema({
  contactPerson: {
    type: String,
    required: false,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  lga: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: false,
  },
  internetAvailable: {
    type: String,
    required: false,
  },
  sittingCapacity: {
    type: String,
    required: false,
  },
  numOfComputers: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  howYouHear: {
    type: String,
    required: true,
  },
});

export default mongoose.models.CombinedSchema ||
  mongoose.model("CombinedSchema", CombinedSchema);
