import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ChangeEvent, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function HomePage() {
    const [file,setFile]=useState<File | null>(null)

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setFile(file || null);
    };
  return (
    <div>
        <nav className='flex justify-between items-center px-6 p-4 '>
            <p className='text-2xl text-indigo-950 text-bold font-medium font-serif'>uniqueImage</p>
            <img className='h-10 w-10 rounded-full' src={'/profile.jpg'}/>
        </nav>
        <hr/>
        <div className='flex justify-center my-16 '>
        <div className='grid place-content-center box_shadow rounded-lg '>
            <div className='bg-indigo-950 w-[40rem] rounded-t-lg'>
            <p className='text-3xl text-white text-center p-5  font-serif font-bold'>Upload You Photos</p>
            </div>
            <div className='p-5'>
                <div className='flex items-center'>
                <p className='font-serif'>Image Name: </p>
            <input className='border-2 w-3/4 p-3 ml-5 rounded-lg border-slate-400 focus:outline-none font-serif'/>
                </div>
            <div className='mt-7'>
                <p  className='font-serif mb-2'>Upload</p>
                <label htmlFor='file'>
                    {
                        !file ?
                        <div className=' border-dotted border-4 rounded-lg cursor-pointer flex justify-center items-center flex-col'>
                    <div>
                <CloudUploadIcon className='text-slate-300' style={{'fontSize':'10rem'}} />
                <p className='font-xl text-slate-300 text-center font-serif my-2'>Browse Files and upload</p>
                </div>
                </div>
                :
                <>
                <div className='flex justify-end'>
                <CloseIcon className=' my-2 cursor-pointer' onClick={()=>setFile(null)}/>
                </div>
                <div className='flex justify-center'>
                <div className='w-72 h-72'>
        <img src={URL.createObjectURL(file)} className='w-full h-full object-contain' alt='Uploaded' />
    </div>
                </div>
                </>
                    }
                
                </label>
            </div>
            </div>
            <div className='flex justify-center'>
    <button className='p-3 bg-indigo-950 text-center text-white w-11/12 m-2 mb-4 rounded-md border-slate-300'>Upload</button>
</div>
        </div>
        </div>
        <input type='file' id='file' name='file' className='hidden' onChange={handleFileChange} />
    </div>
  )
}

export default HomePage