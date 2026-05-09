const axios = require("axios");

const getVirusTotalData = async (url) => {
  try {
    const apiKey = process.env.VIRUSTOTAL_API_KEY;

    const scanResponse = await axios.post(
      "https://www.virustotal.com/api/v3/urls",
      new URLSearchParams({
        url: url,
      }),
      {
        headers: {
          "x-apikey": apiKey,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const analysisId = scanResponse.data.data.id;

    const analysisResponse = await axios.get(
      `https://www.virustotal.com/api/v3/analyses/${analysisId}`,
      {
        headers: {
          "x-apikey": apiKey,
        },
      }
    );

    const stats =
      analysisResponse.data.data.attributes.stats;

    return {
      malicious: stats.malicious || 0,
      suspicious: stats.suspicious || 0,
      harmless: stats.harmless || 0,
      undetected: stats.undetected || 0,
    };
  } catch (error) {
    return {
      malicious: 0,
      suspicious: 0,
      harmless: 0,
      undetected: 0,
    };
  }
};

module.exports = getVirusTotalData;