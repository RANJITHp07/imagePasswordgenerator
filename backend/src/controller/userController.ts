import { NextFunction, Request, Response } from "express";
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { SignUpDTO } from "../middleware/dto/user.dto";
import UserModel from '../model/userSchema'
import jwt from 'jsonwebtoken'
import { LoginDTO } from "../middleware/dto/login.dto";

const signUp=async(req:Request,res:Response,next:NextFunction)=>{
     try{
        const signUpData = plainToClass(SignUpDTO, req.body);

          // Validate sign-up data using DTO
          const errors = await validate(signUpData);
          if (errors.length > 0) {
            res.status(400).json({ message: "Invalid sign-up data", errors });
        }
        await UserModel.create(req.body)
        res.status(200).json({success:true,message: 'Successfully signedIn'})
     }catch(err){
        next(err)
     }
}

const login=async(req:Request,res:Response,next:NextFunction)=>{
  try{
   const loginData = plainToClass(LoginDTO, req.body);

   // Validate sign-up data using DTO
   const errors = await validate(loginData);
   if (errors.length > 0) {
     res.status(400).json({ message: "Invalid sign-up data", errors });
 }

      const user=await UserModel.findOne({username:req.body.username});

      if(user){
        if(user.password===req.body.password){
          const token=jwt.sign({id:user._id,username:user.username},process.env.SECRET_KEY as string);
          res.status(200).json({success:true,message:"Login succesfully",token:token})
        }
        res.status(400).json({ message: "Wrong password" });
      }
      res.status(400).json({ message: "No such user" });
  }catch(err){
   next(err)
  }
}



export default{
    signUp,
    login
}