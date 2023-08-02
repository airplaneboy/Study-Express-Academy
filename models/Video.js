const mongoose = require('mongoose');
import Lesson from './Lesson';

const VideoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String },
    content: { type: String, required: true, trim: true, unique: true },
    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Lesson',
      validate: {
        validator: isLesson,
        message: 'Invalid Lesson. Please provide a valid lesson ID.',
      },
    },
    order: { type: Number },
  },
  { timestamps: true }
);

VideoSchema.pre('save', async function () {
  if (this.isNew) await Lesson.updateOne({ _id: this.lesson }, { $push: { videos: this._id } });
});

async function isLesson(value) {
  const lesson = await Lesson.findById(value);
  return lesson !== null;
}

export default mongoose.models.Video || mongoose.model('Video', VideoSchema);
