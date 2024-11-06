import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import cld from '@/config/cloudinary';

const CloudinaryImage = ({ publicId, alt, width, height, className }) => {
  const myImage = cld.image(publicId);
  myImage.resize(fill().width(width || 500).height(height || 500));

  return (
    <AdvancedImage 
      cldImg={myImage} 
      alt={alt}
      className={className}
    />
  );
};

export default CloudinaryImage;