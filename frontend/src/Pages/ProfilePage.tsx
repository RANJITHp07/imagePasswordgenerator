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
        {
            images.length >0&&
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
        </tbody>
    </table>
}
    {images.length==0 &&  <p className='text-center text-3xl w-full my-5'>No images in the collection</p>}
</div>
    </div>
  );
}

export default ProfilePage;
