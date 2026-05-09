const sslChecker = require("ssl-checker");

const getSSLData = async (domain) => {
  try {
    const ssl = await sslChecker(domain);

    return {
      valid: ssl.valid || false,
      validFrom: ssl.validFrom || "Not Available",
      validTo: ssl.validTo || "Not Available",
      issuer: ssl.issuer || "Not Available",
      daysRemaining: ssl.daysRemaining || 0,
    };
  } catch (error) {
    return {
      valid: false,
      validFrom: "Lookup Failed",
      validTo: "Lookup Failed",
      issuer: "Lookup Failed",
      daysRemaining: 0,
    };
  }
};

module.exports = getSSLData;