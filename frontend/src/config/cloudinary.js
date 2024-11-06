import {Cloudinary} from "@cloudinary/url-gen";

const getCloudName = () => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  console.log('Available env vars:', import.meta.env);
  console.log('Cloudinary Cloud Name:', cloudName);
  
  if (!cloudName) {
    throw new Error('VITE_CLOUDINARY_CLOUD_NAME is not defined in environment variables. Please check your .env file.');
  }
  
  return cloudName;
};

const cld = new Cloudinary({
  cloud: {
    cloudName: getCloudName()
  }
});

export default cld;