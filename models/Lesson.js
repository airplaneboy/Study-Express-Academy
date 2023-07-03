const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    videoURL: { type: String },
    duration: String,
    sequence: Number,
    course: { type: mongoose.Types.ObjectId, required: true, ref: 'Course' },
  },
  { timestamps: true }
);

export default mongoose.models.Lesson || mongoose.model('Lesson', LessonSchema);
