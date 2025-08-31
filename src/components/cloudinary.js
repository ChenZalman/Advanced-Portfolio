import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const CloudinaryComponent = () => {
  // const cld = new Cloudinary({ cloud: { cloudName: 'dlvjhgsbe' } });
  const cld = new Cloudinary({ cloud: { cloudName: process.env.REACT_APP_CLOUD_NAME, apiKey: process.env.REACT_APP_CLOUD_API_KEY } });
  
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
        .image('my_picture_vrb9vt')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return (<AdvancedImage cldImg={img}/>);
};

export default CloudinaryComponent