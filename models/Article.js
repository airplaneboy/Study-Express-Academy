const mongoose = require('mongoose');
import Lesson from './Lesson';

const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String },
    content: { type: String, required: true },
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

ArticleSchema.pre('save', async function () {
  if (this.isNew) await Lesson.updateOne({ _id: this.lesson }, { $push: { articles: this._id } });
});

async function isLesson(value) {
  const lesson = await Lesson.findById(value);
  return lesson !== null;
}

export default mongoose.models.Article || mongoose.model('Article', ArticleSchema);
