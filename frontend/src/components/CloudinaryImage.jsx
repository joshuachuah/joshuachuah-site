import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import cld from '@/config/cloudinary';

const CloudinaryImage = ({ publicId, alt, width, height }) => {
  const myImage = cld.image(publicId);
  myImage.resize(fill().width(width).height(height));

  return (
    <AdvancedImage 
      cldImg={myImage} 
      alt={alt}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  );
};

export default CloudinaryImage;