import FileUploadIcon from '@mui/icons-material/FileUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { Image } from '../@types/image'
import { Modal } from 'antd';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';

function ImageItem({item}:{item:Image}) {
    const [show,setShow]=useState(false)
    const [open,setOpen]=useState(false)
  return (
    <>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {item.imageName}
                </th>
                <td className="px-6 py-4">
                   <div className="flex items-center">{!show ? "********" : item.code}  <RemoveRedEyeIcon className="text-xs mx-3 cursor-pointer" onClick={()=>setShow(!show)}/></div>
                </td>
                <td className="px-6 py-4">
                    <p className='text-xs text-red-400'>Delete<DeleteIcon/></p>
                </td>
                <td className="px-6 py-4 text-blue-400 font-normal">
                    <p className=" text-blue-400 font medium cursor-pointer" onClick={()=>setOpen(true)}>Download <FileUploadIcon/></p>
                </td>
            </tr>
            <Modal open={open} title={"Enter the code"} onCancel={()=>setShow(false)} footer={null}>
                  <input className='p-3 border-2 rounded-md border-slate-300 w-full block focus:outline-none' placeholder='Enter the code'/>
                  <div className='p-3 flex justify-end'>
                    <button className='p-3 flex justify-end mt-2 bg-indigo-950 text-white rounded-lg'>Submit</button>
                  </div>
            </Modal>
    </>
  )
}

export default ImageItem