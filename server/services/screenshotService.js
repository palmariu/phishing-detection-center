const getScreenshotPreview = async (url) => {
  try {
    let finalUrl = url;

    // Auto add https if missing
    if (
      !url.startsWith("http://") &&
      !url.startsWith("https://")
    ) {
      finalUrl = `https://${url}`;
    }

    const screenshotUrl = `https://image.thum.io/get/width/1200/crop/800/noanimate/${finalUrl}`;

    return {
      screenshotUrl,
    };
  } catch (error) {
    return {
      screenshotUrl: "",
    };
  }
};

module.exports = getScreenshotPreview;