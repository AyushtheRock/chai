import { v2 as cloudinary } from 'cloudinary';
import fs  from "fs";

// Configuration
cloudinary.config({ 
    cloud_name:process.env.CLOUD_NAME, 
    api_key:process.env.CLOUD_API_KEY, 
    api_secret:process.env.CLOUD_API_SECRET
});


const uploadOnCloudinary= async (loacalfilepath) => {
    try {
        if(!loacalfilepath)return null
        const response = await cloudinary.uploader.upload
        (loacalfilepath,{
            resource_type:"auto"
        })
        //file uploaded successfully
       // console.log("File is uploaded on Cloudinary",response.url);
       fs.unlinkSync(loacalfilepath);
        return response;
        

    } catch (error) {
        fs.unlinkSync(loacalfilepath)// remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}




export {uploadOnCloudinary}   