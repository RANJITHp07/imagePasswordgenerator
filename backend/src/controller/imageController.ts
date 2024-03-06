import { NextFunction, Request, Response } from "express";
import ImageOtpModel, { ImageDocument } from "../model/imageSchema";
import path from 'path';
import fs from 'fs'


const createImage=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const data={
            user_id: req.params.id,
            file_name: req.file?.filename,
            imageName:req.body.imageName,
            code: generateRandomCode(100000, 999999)
        }
        await ImageOtpModel.create(data)
        res.status(200).json({success:true,message:'File uploaded successfully'});
    }catch(err){
         next(err)
    }
}

const listAllImages=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        console.log(req.params.id)
     const data=await ImageOtpModel.find({user_id:req.params.id})
     res.status(200).json({ success:true,message:'All the images',data:data})
    }catch(err){
        next(err)
    }
}

const deleteImage=async(req:Request,res:Response,next:NextFunction)=>{
    try{
      const deletedImage:ImageDocument | null=await ImageOtpModel.findByIdAndDelete(req.params.id);
      if(deletedImage){
        const imagePath = path.join(__dirname, '../public/images', deletedImage.file_name);
        fs.unlinkSync(imagePath);
        res.status(200).json({success:true,message:'Sucesssfully deleted'})
      }
            res.status(400).json({message:'No such image'})
    }catch(err){
        next(err)
    }
}

function generateRandomCode(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {
    createImage,
    listAllImages,
    deleteImage
}