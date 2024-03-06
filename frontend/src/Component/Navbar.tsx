import {  Dropdown,} from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

function Navbar({id}:{id:string}) {
    const navigation=useNavigate()

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <p onClick={()=>navigation('/profile',{state:{id}})}>
              Profile
            </p>
          ),
        },
        {
          key: '2',
          label: (
            <p onClick={()=>{
                localStorage.removeItem('accessToken');
                navigation('/login')
            }}>
             Logout
            </p>
          ),
        }
      ];

  return (
    <div>
               <nav className='flex justify-between items-center px-6 p-4 '>
            <p className='text-2xl text-indigo-950 text-bold font-medium font-serif cursor-pointer' onClick={()=>navigation('/')}>uniqueImage</p>
            <Dropdown menu={{ items }} placement="bottomLeft">
            <img className='h-10 w-10 rounded-full cursor-pointer' src={'/profile.jpg'}/>
      </Dropdown>

        </nav>
    </div>
  )
}

export default Navbar