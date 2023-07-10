import mongoose from 'mongoose';

const UnitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
    validate: { validator: isCourse, message: 'Invalid course. Please provide a valid course ID.' },
  },
  lessons: { type: [mongoose.Schema.Types.ObjectId], ref: 'Lesson' },
  image: String,
});

UnitSchema.pre('save', async function () {
  if (this.isNew) await mongoose.model('Course').updateOne({ _id: this.course }, { $push: { units: this._id } });
});

async function isCourse(value) {
  const course = await mongoose.model('Course').findById(value);
  return course !== null;
}

export default mongoose.models.Unit || mongoose.model('Unit', UnitSchema);
