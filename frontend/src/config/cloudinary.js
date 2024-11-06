import {Cloudinary} from "@cloudinary/url-gen";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
console.log('Cloudinary Cloud Name:', cloudName); // Debug log

if (!cloudName) {
  throw new Error('VITE_CLOUDINARY_CLOUD_NAME is not defined in environment variables');
}

const cld = new Cloudinary({
  cloud: {
    cloudName: cloudName
  }
});

export default cld;