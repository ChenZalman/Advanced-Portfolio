// import React from 'react'
// import { Cloudinary } from '@cloudinary/url-gen';
// import cloudinary from "cloudinary";
// import { auto } from '@cloudinary/url-gen/actions/resize';
// import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
// import { AdvancedImage } from '@cloudinary/react';

// const CloudinaryComponent = () => {

//   const cld = new Cloudinary({ cloud: { cloudName: process.env.REACT_APP_CLOUD_NAME, apiKey: process.env.REACT_APP_CLOUD_API_KEY, apiSecret: process.env.REACT_APP_CLOUD_SECRET, authToken: process.env.REACT_APP_CLOUD_TOKEN }});
//   console.log(cld)
//   // Use this sample image or upload your own via the Media Explorer
//   const img = cld
//     .image('my_picture_vrb9vt')
//     .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
//     .quality('auto')
//     .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

//   return (<AdvancedImage cldImg={img} />);
// };

// export default CloudinaryComponent

import { AdvancedImage } from "@cloudinary/react";
import { useEffect, useState } from "react";

const SecureCloudinaryImage = () => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    fetch("/.netlify/functions/get-signed-url", {
      method: "POST",
      body: JSON.stringify({ public_id: "my_picture_vrb9vt.jpg" }),
    })
      .then((res) => res.json())
      .then((data) => setImgUrl(data.url));
  }, []);

  if (!imgUrl) return <p>Loading...</p>;

  return <AdvancedImage src={imgUrl} alt="Profile not found" />;
};

export default SecureCloudinaryImage;