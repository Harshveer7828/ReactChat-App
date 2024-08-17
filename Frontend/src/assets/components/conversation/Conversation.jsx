import React from 'react'

const Conversation = () => {
    return <>
        <div className='h-[80px] w-full flex items-center gap-3 cursor-pointer hover:bg-red-600'>
            <div className="avatar online h-16 w-16">
                <div className="w-24 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className='text-2xl text-white font-bold'>Harsh veer singh</h1>
                <h3 className='text-sm text-white opacity-70'>Aur Bhai Kesa Hai ?</h3>
            </div>
        </div>
    </>
}

export default Conversation