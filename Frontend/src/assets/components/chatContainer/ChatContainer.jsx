import React from 'react'
import Messages from '../messages/Messages'
import MessageInput from '../messages/MessageInput'

const ChatContainer = () => {
  const chatSelect = true;


  return <div className='flex flex-col lg:w-full border-l-2 border-slate-600 px-2 relative'>
    <>
      {chatSelect ? <NoChatSelect /> : (
        <>
        <div className='h-[10vh] flex items-center justify-between'>
          <div className='w-1/2 flex gap-4 items-center justify-start p-2'>
            <div className="avatar w-[20%] mt-4">
              <div className="w-20 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <h3 className='text-3xl font-bold text-white'>Harsh veer singh</h3>
          </div>
        </div>
        <div className="divider"></div>
        {/* conversation starts from here */}
        <Messages />
        <MessageInput />
      </>
      )}
    </>

  </div>


}

export default ChatContainer

const NoChatSelect = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>

        <p>Welcome 👋 Harsh veer singh ❤️</p>
        <p>Select a chat to start messaging</p>
      </div>


    </div>
  )
}