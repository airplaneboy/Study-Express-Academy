import mongoose from 'mongoose';

const UnitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  lessons: { type: [mongoose.Schema.Types.ObjectId], ref: 'Lesson' },
  image: String,
});

UnitSchema.pre('save', async function () {
  if (this.isNew) await mongoose.model('Course').updateOne({ _id: this.course }, { $push: { units: this._id } });
});

export default mongoose.models.Unit || mongoose.model('Unit', UnitSchema);
