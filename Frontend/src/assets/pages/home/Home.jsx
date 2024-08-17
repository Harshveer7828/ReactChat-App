import React from 'react';
import Header from '../../components/Header/Header.jsx'
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import Conversations from '../../components/conversations/Conversations.jsx';
import ChatContainer from '../../components/ChatContainer/ChatContainer.jsx';

const Home = () => {

  return <>
    <div className="Chatcontainer w-screen h-screen flex">
      <div className="sidebar lg:w-[40%] w-full border-r-1 border-slate-600">
        <button className='lg:hidden'>open side</button>
        <Header />
        <SearchBox />
        <Conversations />
      </div>
      <ChatContainer/>
    </div>

  </>
}

export default Home