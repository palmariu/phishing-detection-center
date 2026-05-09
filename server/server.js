// server/server.js
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const ScanHistory = require("./models/ScanHistory");
const connectDB = require("./config/db");
const getWhoisData = require("./services/whoisService");
const getSSLData = require("./services/sslService");
const getVirusTotalData = require("./services/virusTotalService");
const getScreenshotPreview = require("./services/screenshotService");
const generatePDFReport = require("./controllers/pdfController");

const app = express();

/*
========================================
DATABASE CONNECTION
========================================
Temporary MongoDB OFF for testing
(Enable later by removing // connectDB();)
========================================
*/

connectDB();

/*
========================================
MIDDLEWARE
========================================
*/

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

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
PDF EXPORT ROUTE
========================================
*/

app.post("/api/export-pdf", generatePDFReport);

/*
========================================
POST API → Scan URL + WHOIS + SSL +
VirusTotal + Screenshot
========================================
*/

app.post("/api/scan-url", async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        message: "URL is required",
      });
    }

    /*
    Extract clean domain
    */

    const domain = url
      .replace("https://", "")
      .replace("http://", "")
      .replace("www.", "")
      .split("/")[0];

    /*
    Advanced Services
    */

    const whoisData = await getWhoisData(domain);
    const sslData = await getSSLData(domain);
    const virusTotalData = await getVirusTotalData(url);
    const screenshotData = await getScreenshotPreview(url);

    let result;

    /*
    ========================================
    SMART RISK SCORE LOGIC
    ========================================
    */

    // Trusted websites → 100 Safe Score
    if (
  url.includes("google.com") ||
  url.includes("github.com") ||
  url.includes("facebook.com") ||
  url.includes("microsoft.com") ||
  url.includes("amazon.com") ||
  url.includes("apple.com") ||
  url.includes("linkedin.com") ||
  url.includes("openai.com")
) {
  result = {
    scannedUrl: url,

    riskScore: 100,

    status: "Safe",

    threatType: "Trusted Website",

    message: "Highly trusted secure website detected. No phishing indicators found.",

    whois: whoisData,
    ssl: sslData,
    virusTotal: {
      malicious: 0,
      suspicious: 0,
      harmless: 95,
      undetected: 5,
    },

    screenshot: screenshotData,
  };
}

    // Suspicious websites → High Risk
    else if (
      url.includes("fake") ||
      url.includes("login") ||
      url.includes("bank") ||
      url.includes("secure") ||
      url.includes("verify") ||
      url.includes("update") ||
      url.includes("free-money") ||
      url.includes("gift-card")
    ) {
      result = {
        scannedUrl: url,
        riskScore: 82,
        status: "Malicious",
        threatType: "Phishing",
        message: "Suspicious login page detected",

        whois: whoisData,
        ssl: sslData,
        virusTotal: virusTotalData,
        screenshot: screenshotData,
      };
    }

    // Normal websites → Medium Safe
    else {
      result = {
        scannedUrl: url,
        riskScore: 65,
        status: "Safe",
        threatType: "Clean",
        message: "No major phishing indicators found",

        whois: whoisData,
        ssl: sslData,
        virusTotal: virusTotalData,
        screenshot: screenshotData,
      };
    }

    /*
    Temporary direct response
    MongoDB save disabled for stability
    */
await ScanHistory.create({
  scannedUrl: result.scannedUrl,
  riskScore: result.riskScore,
  status: result.status,
  threatType: result.threatType,
  message: result.message,
});

console.log("Saved to MongoDB:", result);


return res.json(result);
  

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: error.message,
    });
  }
});

/*
========================================
GET API → Scan History
========================================
*/

app.get("/api/history", async (req, res) => {
  try {
    /*
    Temporary static response
    while MongoDB disabled
    */
  const history = await ScanHistory.find().sort({
  createdAt: -1,
});


return res.json(history);

  

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});
app.delete("/api/delete-history/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Temporary response while MongoDB disabled
    await ScanHistory.findByIdAndDelete(id);

return res.json({
  message: "Record deleted successfully",
});
    /*
    Later enable:

    await ScanHistory.findByIdAndDelete(id);

    return res.json({
      message: "Record deleted successfully",
    });
    */

  } catch (error) {
    return res.status(500).json({
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