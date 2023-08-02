const mongoose = require('mongoose');
import Test from './Test';

const QuestionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true, unique: true, trim: true, lowercase: true },
    options: { type: [String], required: true },
    answer: { type: String, required: true, trim: true, lowercase: true },
    test: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Test',
      required: true,
      validate: { validator: isContent, message: 'Invalid test. Please provide a valid test ID.' },
    },
  },
  { timestamps: true }
);

QuestionSchema.pre('save', async function () {
  if (this.isNew) await Test.updateOne({ _id: this.unit }, { $push: { questions: this._id } });
});

async function isContent(value) {
  const content = await Test.findById(value);
  return content !== null;
}

export default mongoose.models.Question || mongoose.model('Question', QuestionSchema);
