import React from 'react';
import Logo from '../Logo/Logo';
import { IoIosNotifications } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import profilepic from '../../assets/profilepic.jpg';

function Navbar  () {
  return (
    <div className="h-[50px] w-full bg-green-600 flex items-center sticky top-0">
    <div className='left bg-red' style ={{flex:3}}>
   <div className="logodiv cursor-pointer">
    <Logo/>
    </div>   
    </div>

    <div className="center " style ={{flex:5}}>
      <div className="searchbar w-full h-[30px] bg-white rounded-xl flex items-center">
      <IoMdSearch className="text-lg ml-[10px]" />
      <input type="text" className='search w-full focus:outline-none bg-none m-[15px]' placeholder='search'/>

      </div>

    </div>
    <div className="right  flex items-center justify-around text-white" style ={{flex:4}}>
      <div className="tablinks text-lg cursor-pointer flex gap-[10px] ">
        <span className="tablink1 font-bold">Home

        </span>
        <span className="tablink2 font-bold">TimeLine</span>
      </div>
      <div className="tabicons flex text-xl gap-[10px]">
        <div className="tabicon1 cursor-pointer relative">
        <IoPersonSharp className='text-2xl' />
        <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center text-5m">1</span>
        </div>
        <div className="tabicon2 cursor-pointer relative">
        <IoChatboxEllipses className='text-2xl' />
        <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center text-5m">
        2</span>
        </div>
        <div className="tabicon3 cursor-pointer relative">
        <IoIosNotifications className='text-2xl' />
        <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center text-5m">3</span>
        </div>

        <div className="ProfilePicDiv">
          <img src={profilepic} alt=''className='w-[32px] h-[32px] object-cover rounded-full cursor'/>
        </div>


      </div>

    </div>

    </div>

  )
}

export default Navbar