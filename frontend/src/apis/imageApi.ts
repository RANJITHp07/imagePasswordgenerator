import Api from "../util/api"

export const createImage=async(file:FormData,id:string)=>{
    try{
       const res=await Api.post(`/images/${id}`,file)
       return res
    }catch(err){
        throw err
    }
}