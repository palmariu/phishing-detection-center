// server/server.js

const ScanHistory = require("./models/ScanHistory");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

/*
========================================
ROOT ROUTE
========================================
*/

app.get("/", (req, res) => {
  res.send("Phishing Detection Center Backend Running");
});

/*
========================================
POST API → Scan URL + Save in MongoDB
========================================
*/

app.post("/api/scan-url", async (req, res) => {
  try {
    const { url } = req.body;

    const mockResult = {
      scannedUrl: url,
      riskScore: 82,
      status: "Malicious",
      threatType: "Phishing",
      message: "Suspicious login page detected",
    };

    const savedScan = await ScanHistory.create(mockResult);

    res.json(savedScan);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/*
========================================
GET API → Fetch Scan History
========================================
*/

app.get("/api/history", async (req, res) => {
  try {
    const history = await ScanHistory.find().sort({
      createdAt: -1,
    });

    res.json(history);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/*
========================================
SERVER START
========================================
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});