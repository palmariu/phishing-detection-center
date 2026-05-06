const mongoose = require("mongoose");

const scanHistorySchema = new mongoose.Schema(
  {
    scannedUrl: {
      type: String,
      required: true,
    },

    riskScore: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      required: true,
    },

    threatType: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ScanHistory", scanHistorySchema);