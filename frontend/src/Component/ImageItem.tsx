import FileUploadIcon from '@mui/icons-material/FileUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { Image } from '../@types/image'
import { Modal, message } from 'antd';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { Popconfirm } from 'antd';
import { deleteImage } from '../apis/imageApi';

function ImageItem({item,handleDelete}:{item:Image,handleDelete:(id:string)=>void}) {
    const [show,setShow]=useState(false)
    const [open,setOpen]=useState(false)
    const [code,setCode]=useState('')

    const downloadFile = async (fileUrl:string) => {
      try {
          const response = await axios.get(fileUrl, {
              responseType: 'blob',
          });

          const blob = new Blob([response.data]);
          const url = window.URL.createObjectURL(blob);

          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'photo.jpg');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      } catch (error) {
          console.error('Error downloading file:', error);
          message.error('Error downloading file');
      }
  };

  const handleSubmit=()=>{
    if(item.code===code){
       downloadFile(`http://localhost:5000/photos/${item.file_name}`)
       setOpen(false)
       return
    }

    message.info('Wrong password')
  } 



   const handleDeleteImage=async()=>{
       const res=await deleteImage(item._id)
       if(res.data.success){
        handleDelete(item._id)
       }
   }

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
                <Popconfirm
    title="Delete the Image"
    description="Are you sure to delete this Image?"
    onConfirm={handleDeleteImage}
    onCancel={()=>console.log()}
    okText="Yes"
    cancelText="No"
    okButtonProps={{ style: { backgroundColor: 'blue' } }}
  >
                    <p className='text-xs text-red-400 cursor-pointer'>Delete <DeleteIcon className='hidden md:block'/></p>
                    </Popconfirm>
                </td>
                <td className="px-6 py-4 text-blue-400 font-normal">
                    <p className=" text-blue-400 font medium cursor-pointer" onClick={()=>setOpen(true)}>Download <FileUploadIcon  className='hidden md:block'/></p>
                </td>
            </tr>
            <Modal open={open} title={"Enter the code"} onCancel={()=>setOpen(false)} footer={null}>
                  <input className='p-3 border-2 rounded-md border-slate-300 w-full block focus:outline-none' placeholder='Enter the code' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setCode(e.target.value)}/>
                  <div className='p-3 flex justify-end'>
                    <button className='p-3 flex justify-end mt-2 bg-indigo-950 text-white rounded-lg' onClick={()=>handleSubmit()}>Submit</button>
                  </div>
            </Modal>
    </>
  )
}

export default ImageItem