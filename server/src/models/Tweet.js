import mongoose, { Schema } from 'mongoose';

const TweetSchema = new Schema(
  {
    text: {
      type: String,
      minlength: [1, 'Text needs to be longer'],
      maxlength: [144, 'Text too long'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    favouriteCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Tweet', TweetSchema);
