import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default async (req, context) => {
  try {
    const { public_id } = JSON.parse(req.body || "{}");
    console.log("Get: " + public_id)
    const url = cloudinary.v2.url(public_id, {
      type: "authenticated", // change to "upload" if your asset is Public
      sign_url: true,
      transformation: [
        { width: 500, height: 500, crop: "fill", gravity: "auto", fetch_format: "auto", quality: "auto" }
      ]
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
}