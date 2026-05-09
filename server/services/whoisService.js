const whois = require("whois-json");

const getWhoisData = async (domain) => {
  try {
    const data = await whois(domain);

    return {
      registrar: data.registrar || "Not Available",
      creationDate: data.creationDate || "Not Available",
      expiryDate: data.registryExpiryDate || "Not Available",
      country: data.country || "Not Available",
      nameServers: data.nameServer || "Not Available",
    };
  } catch (error) {
    return {
      registrar: "Lookup Failed",
      creationDate: "Lookup Failed",
      expiryDate: "Lookup Failed",
      country: "Lookup Failed",
      nameServers: "Lookup Failed",
    };
  }
};

module.exports = getWhoisData;