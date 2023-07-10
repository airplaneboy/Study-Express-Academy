const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
  title: { type: String, required: [true, ['Achievement name cannot be empty']], unique: true },
  description: { type: String, required: [true, ['Achievement description cannot be empty']] },
  imageURL: { type: String },
  requirement: { type: [String], required: true },
});

export default mongoose.models.Achievement || mongoose.model('Achievement', AchievementSchema);
