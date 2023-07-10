const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    courses: { type: [mongoose.Schema.Types.ObjectId], ref: 'Course' },
  },
  { timestamps: true }
);

export default mongoose.models.Subject || mongoose.model('Subject', SubjectSchema);
