import { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import { useLocation } from 'react-router-dom';
import { getImages } from '../apis/imageApi';
import { Image } from '../@types/image';
import ImageItem from '../Component/ImageItem';


function ProfilePage() {
  const params=useLocation()
  const [images,setImages]=useState<Image[]>([]);

  useEffect(()=>{
     const fetchData=async()=>{
        const res=await getImages(params.state.id)
       setImages(res.data.data)
     }
     fetchData()
  },[])



  return (
    <div>
       <Navbar id={params.state.id}/>
       <hr/>

       <div className="relative overflow-x-auto my-5 border-2 ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Image name
                </th>
                <th scope="col" className="px-6 py-3">
                    Secret code
                </th>
                <th scope="col" className="px-6 py-3">
                      Delete
                </th>
                <th scope="col" className="px-6 py-3">
                    Download
                </th>
            </tr>
        </thead>
        <tbody>

          {
            images.map((m,index)=>{
                return (
                <ImageItem item={m}/>
                )
            })
          }
            
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>
    </div>
  );
}

export default ProfilePage;
