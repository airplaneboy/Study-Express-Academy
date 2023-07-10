const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true, required: [true, 'Course title cannot be empty'], maxlength: 300, unique: true },
    description: { type: String, required: [true, 'Course description cannot be empty'], maxlength: 500 },
    tags: [String],
    instructor: { type: String, required: true },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    units: { type: [mongoose.Schema.ObjectId], ref: 'Unit' },
  },
  { timestamps: true }
);

CourseSchema.pre('save', async function () {
  if (this.isNew) await mongoose.model('Subject').updateOne({ _id: this.subject }, { $push: { courses: this._id } });
});

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);
