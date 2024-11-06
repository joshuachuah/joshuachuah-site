import {Cloudinary} from "@cloudinary/url-gen";

const getCloudName = () => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  
  if (!cloudName) {
    console.error('Environment variables:', import.meta.env);
    throw new Error('VITE_CLOUDINARY_CLOUD_NAME is not defined in environment variables');
  }
  
  return cloudName;
};

const cld = new Cloudinary({
  cloud: {
    cloudName: getCloudName(),
    apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY,
    apiSecret: import.meta.env.VITE_CLOUDINARY_API_SECRET
  }
});

export default cld;