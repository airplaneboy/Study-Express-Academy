const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    videoURL: { type: String },
    duration: String,
    sequence: Number,
    image: String,
    unit: { type: Schema.Types.ObjectId, ref: 'Unit' },
  },
  { timestamps: true }
);

LessonSchema.pre('save', async function () {
  if (this.isNew) await model('Unit').updateOne({ _id: this.unit }, { $push: { lessons: this._id } });
});

export default mongoose.models.Lesson || mongoose.model('Lesson', LessonSchema);
