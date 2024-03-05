import {  Dropdown,} from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigation=useNavigate()

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a  href="/profile">
              Profile
            </a>
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
            <p className='text-2xl text-indigo-950 text-bold font-medium font-serif'>uniqueImage</p>
            <Dropdown menu={{ items }} placement="bottomLeft">
            <img className='h-10 w-10 rounded-full' src={'/profile.jpg'}/>
      </Dropdown>

        </nav>
    </div>
  )
}

export default Navbar