const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

exports.handler = async (event, context) => {
  try {
    const { public_id } = JSON.parse(event.body || "{}");

    const url = cloudinary.url(public_id, {
      type: "authenticated",
      sign_url: true,
      // transformation: [
      //   {
      //     width: 500,
      //     height: 500,
      //     crop: "fill",
      //     gravity: "auto",
      //     fetch_format: "auto",
      //     quality: "auto",
      //   },
      // ],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};