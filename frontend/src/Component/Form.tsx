import { useForm } from "react-hook-form";
import { resolver } from '../util/formValidator/signupForm';
import { UserForm } from '../@types/user';
import { message } from "antd";
import { login, signUp } from "../apis/userApi";
import { useNavigate } from "react-router-dom";

function Form({page}:{page:boolean}) {
  const navigation=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: async (values) => await resolver(values),
  });

  // handle signup 
    const handleSignup=async(data:UserForm)=>{
      try{
        if(data.password.length<6){
          message.error("Password length less than 6");
            return
        }
          if(data.confirm_password!== data.password){
            message.error("Password not matching");
            return
          }
          
          const {confirm_password,...user}=data
          const res=await signUp(user);
          if(res.data.success){
            message.success("Successfully signedIn");
            navigation('/login')
            return
          }
      }catch(err){
        console.log(err)
      }
      
    }


    //handle login
    const handleLogin=async(data:UserForm)=>{
          try{
            console.log(data)
             const res=await login(data)
             if(res?.data.success){
               localStorage.setItem('accessToken',res.data.token)
               navigation('/')
             }
          }catch(err:any){
           throw err
          }
    }
  return (
    <div className='my-4'>
        <form
        onSubmit={handleSubmit((data) =>
          page ? handleSignup(data) : handleLogin(data)
        )}
        >
           {
            errors.username && <p className="text-red-400 text-xs">Enter you username*</p>
            }
        <input className='p-3 border-2 rounded-md border-slate-300 w-full block focus:outline-none' placeholder="Enter username" type='text' {...register("username")} />
        {
  page ? (
    <>
      {errors.email && <p className="text-red-400 text-xs mt-3">Enter your email*</p>}      
      <input  id="email" className={`p-3 border-2 rounded-md border-slate-300 w-full block ${errors.email ? 'mb-3' : 'my-3'} focus:outline-none`} placeholder="Enter Email Id" type='email' {...register("email")} />
    </>
  ) : (
   <>
    {errors.password && <p className="text-red-400 text-xs mt-3">Enter your password*</p>}
    <input className={`p-3 border-2 rounded-md border-slate-300 w-full block ${errors.password ? 'mb-3' : 'my-3'} focus:outline-none`} placeholder="Enter Password" type='password' {...register("password")} />
    </>
  )
} 
              {
            page && 
            <div className='flex'>
            <div className=" w-1/2 mr-4">
             {errors.password && <p className="text-red-400 text-xs">Enter your password*</p>}
              <input className='p-3 border-2 rounded-md border-slate-300 w-full  focus:outline-none' placeholder="Enter Password" type='password' {...register("password")}/>
            </div>
            <div className=" w-1/2 ">
           {errors.password && <p className="text-red-400 text-xs">Enter the confirm_password*</p>}
            <input className='p-3 border-2 rounded-md border-slate-300  w-full  focus:outline-none' placeholder="Confirm Password" type='password' {...register("confirm_password")}/>
           </div>
        </div>
        }
        
        <button className='p-3 bg-indigo-950 text-center text-white w-full mt-4 rounded-md border-slate-300  mr-4'>{page ? "SignUp" : "Login"}</button>
        </form>
        <p className='text-end text-sm'>{page ? <>Do you have an account? <a href='/login' className='text-blue-400'>Login</a></> : <>Create an account? <a href='/signup' className='text-blue-400'>Create</a></>}</p>
    </div>
  )
}

export default Form