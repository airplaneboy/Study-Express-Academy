const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
  title: { type: String, required: [true, ['Achievement name cannot be empty']], unique: true, trim: true },
  description: { type: String, required: [true, ['Achievement description cannot be empty']], trim: true },
  imageURL: { type: String, trim: true },
  requirement: { type: [String], required: true },
});

AchievementSchema.pre('save', function () {});

export default mongoose.models.Achievement || mongoose.model('Achievement', AchievementSchema);
