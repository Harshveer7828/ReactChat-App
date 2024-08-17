import React from 'react'

const MessageInput = () => {
    return <>
        <div className="inputBottom relative w-full p-4">
            <form className='w-full flex gap-6'>
                <input type="text" placeholder="Type here" className="input input-bordered w-[90%]" />
                <button className="btn btn-error text-white rounded-full h-[50px] w-[50px] flex items-center justify-center"><h1 className="fa-solid fa-paper-plane text-xl"></h1></button>
            </form>
        </div>
    </>
}

export default MessageInput