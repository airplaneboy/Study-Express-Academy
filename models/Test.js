const mongoose = require('mongoose');
import Lesson from './Lesson';

const TestSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String },
    questions: { type: [mongoose.Schema.Types.ObjectId], ref: 'Question' },
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

TestSchema.pre('save', async function () {
  if (this.isNew) await Lesson.updateOne({ _id: this.lesson }, { $push: { tests: this._id } });
});

async function isLesson(value) {
  const lesson = await Lesson.findById(value);
  return lesson !== null;
}

export default mongoose.models.Test || mongoose.model('Test', TestSchema);
