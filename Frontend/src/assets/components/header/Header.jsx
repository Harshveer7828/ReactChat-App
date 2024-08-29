import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return <>
        <div className='flex items-center justify-between p-2'>
            <div className='w-1/2 flex gap-4 items-center justify-start'>
                <div className="avatar w-[25%] online">
                    <div className="w-24 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <h3 className='text-3xl font-bold text-white'>Chats</h3>
            </div>
            <div className='h-9 w-9 bg-red-600 rounded-full flex items-center justify-center buttonShadow '>
                <Link to="/logout"><h2 className='fa-solid fa-right-from-bracket text-2xl text-white cursor-pointer'></h2></Link>
            </div>
        </div>
        
    </>
}

export default Header;