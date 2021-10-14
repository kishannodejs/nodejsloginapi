const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_USER_NAME||'AIzaSyBONcYIVhb_FN1Ui7BcEI6e7iEH3cgNQpc',
  api_key: process.env.CLOUDINARY_API_KEY||'AIzaSyBONcYIVhb_FN1Ui7BcEI6e7iEH3cgNQpc',
  api_secret: process.env.CLOUDINARY_API_SECRET||'AIzaSyBONcYIVhb_FN1Ui7BcEI6e7iEH3cgNQpc',
});

module.exports = cloudinary;
