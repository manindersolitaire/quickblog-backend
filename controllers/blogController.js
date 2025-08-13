import fs from 'fs'
import imagekit from '../configs/imageKit.js'

export const addBlog =  async (req,res) => {
    try {
        const {title, subTitle, description , category , isPublished} = JSON.parse(req.body.blog)
        const imageFile = req.file
        // check if all fields are present

        if(!title || !description || !category || !imageFile){
            return res.json({success: false, message : "Missing required fields"})
        }

        const fileBuffer  =  fs.readFileSync(imageFile.path)

        // Upload Image to ImageKit
        const response = await imagekit.upload({
            file : fileBuffer,
            fileName:imageFile.originalname,
            folder : "/blogs"
        })

        // Optimized Image ....
    } catch (error) {
        
    }
}