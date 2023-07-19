const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, lowercase: true },
    description: { type: String, trim: true },
    courses: { type: [mongoose.Schema.Types.ObjectId], ref: 'Course' },
  },
  { timestamps: true }
);

export default mongoose.models.Subject || mongoose.model('Subject', SubjectSchema);
