// models/Post.ts
import mongoose, { Document, Schema } from "mongoose";

const BPOScehmaDB = new mongoose.Schema({
  contactPerson: {
    type: String,
    required: true,
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
  internetAvailable: {
    type: String,
    required: true,
  },
  sittingCapacity: {
    type: String,
    required: true,
  },
  numOfComputers: {
    type: String,
    required: true,
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

export default mongoose.models.BPOScehmaDB ||
  mongoose.model("BPOScehma", BPOScehmaDB);
