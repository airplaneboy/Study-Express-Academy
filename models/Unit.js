import mongoose from 'mongoose';

const UnitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  course: { type: Schema.Types.ObjectId, ref: 'Course' },
  lessons: { type: [Schema.Types.ObjectId], ref: 'Lesson' },
  image: String,
});

UnitSchema.pre('save', async function () {
  if (this.isNew) await model('Course').updateOne({ _id: this.course }, { $push: { units: this._id } });
});

export default mongoose.models.Unit || mongoose.model('Unit', UnitSchema);
