import React from 'react'

function Form({page}:{page:boolean}) {
  return (
    <div className='my-4'>
        <form>
        <input className='p-3 border-2 rounded-md border-slate-300 w-full block focus:outline-none' placeholder="Enter username" type='text' />
        {
            page ?
            <input className='p-3 border-2 rounded-md border-slate-300 w-full block my-3 focus:outline-none' placeholder="Enter Email Id" type='email'/>
            :
            <input className='p-3 border-2 rounded-md border-slate-300 w-full block my-3 focus:outline-none' placeholder="Enter Password" type='password'/>

        }  
              {
            page && 
            <div className='flex'>
        <input className='p-3 border-2 rounded-md border-slate-300 w-1/2 mr-4 focus:outline-none' placeholder="Enter Password" type='password'/>
        <input className='p-3 border-2 rounded-md border-slate-300 w-1/2 focus:outline-none' placeholder="Confirm Password" type='password'/>
        </div>
        }
        
        <button className='p-3 bg-indigo-950 text-center text-white w-full mt-4 rounded-md border-slate-300  mr-4'>{page ? "SignUp" : "Login"}</button>
        </form>
        <p className='text-end text-sm'>{page ? <>Do you have an account? <a href='/login' className='text-blue-400'>Login</a></> : <>Create an account? <a href='/signup' className='text-blue-400'>Create</a></>}</p>
    </div>
  )
}

export default Form