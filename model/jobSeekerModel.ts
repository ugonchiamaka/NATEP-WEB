// models/Post.ts
import mongoose, { Document, Schema } from "mongoose";

const JobSeekerSchemaDB = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
  position: {
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

export default mongoose.models.JobSeekerSchemaDB ||
  mongoose.model("JobSeekerSchema", JobSeekerSchemaDB);
