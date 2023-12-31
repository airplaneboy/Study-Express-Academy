const mongoose = require('mongoose');
import Subject from './Subject';

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Course title cannot be empty'],
      maxlength: 300,
      unique: true,
      lowercase: true,
    },
    description: { type: String, required: [true, 'Course description cannot be empty'], maxlength: 500, trim: true },
    tags: [String],
    instructor: { type: String, required: true },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
      required: true,
      validate: { validator: isSubject, message: 'Invalid subject. Please provide a valid subject ID.' },
    },
    level: {
      type: String,
      enum: ['international', 'domestic'],
      required: [true, 'You need to specify if this a "domestic" or an "international" course'],
    },
    units: { type: [mongoose.Schema.Types.ObjectId], ref: 'Unit' },
    order: { type: Number },
  },
  { timestamps: true }
);

CourseSchema.pre('save', async function () {
  if (this.isNew) await Subject.updateOne({ _id: this.subject }, { $push: { courses: this._id } });
});

async function isSubject(value) {
  const subject = await Subject.findById(value);
  return subject !== null;
}

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);
