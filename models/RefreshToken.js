const mongoose = require('mongoose');

const RefreshTokenSchema = new mongoose.Schema(
  {
    refreshToken: { type: String, required: true, trim: true },
    isValid: { type: Boolean, default: true },
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export default mongoose.models.RefreshToken || mongoose.model('RefreshToken', RefreshTokenSchema);
