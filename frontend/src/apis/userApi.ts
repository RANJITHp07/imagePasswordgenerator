import { message } from "antd"
import { UserForm } from "../@types/user"
import Api from "../util/api"

export const signUp=async(user:Omit<UserForm, 'confirm_password'> )=>{
    try{
      const res= await Api.post('/signup',user)
      return res
    }catch(err:any){
      message.info(err?.response?.data?.message)
    }
}

export const login=async(user:Omit<UserForm, 'confirm_password'|'email'> )=>{
    try{
      const res= await Api.post('/login',user)
      return res
    }catch(err:any){
        message.info(err?.response?.data?.message)
    }
}