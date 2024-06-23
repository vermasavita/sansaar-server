import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minLength: [4, "Title must be at greater then 4 characters long"],
    maxLength: [80, "Title must be at less then 200 characters long"],
  },

  description: {
    type: String,
    required: [true, "Title is required"],
    minLength: [20, "desc must be at greater then 4 characters long"],
  },
  lectures: {
    title: {
      type: String,
      required: [true, "Title is required"],
      minLength: [4, "Title must be at greater then 4 characters long"],
      maxLength: [80, "Title must be at less then 200 characters long"],
    },
    description: {
      type: String,
      required: [true, "Title is required"],
      minLength: [20, "desc must be at greater then 4 characters long"],
    },
    videos: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  },
  poster: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  views: {
    type: Number,
    default: 0,
  },
  numOfVideos: { type: Number, default: 0 },
  category: { type: String, required: [true, "Category is required"] },
  createdBy: { type: String, required: [true, "enter instructor name"] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Course", course);
