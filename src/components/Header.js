import React from 'react'
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiMicrophone } from "react-icons/hi2";

function expandSearch() {
    var input = document.getElementById("searchInput");
    var btn = document.getElementById("searchBtn");
    var mq = window.matchMedia("(max-width: 768px)");
    
    if(mq.matches) {
        if (input.style.width === "0px" || input.style.width === "") {
            input.style.display = 'block'
            input.style.width = "200px";
            btn.style.backgroundColor = "#555";
        } else {
            input.style.display = 'none'
            input.style.width = "0px";
            btn.style.backgroundColor = "#333";
          }
    }   
  }
  

const Header = () => {
  return (
    <header>
        <div className='left'>
            <button><FiMenu className='aa' /> </button>
            <a href=''><img class="style-scope ytd-yoodle-renderer" src="https://www.gstatic.com/youtube/img/promos/growth/b251157af68c83ca83a31a0174662bf602ff6ffba92e34ed7fc68fcf0d38658d_122x56.webp" alt="Street eats" /></a>  
        </div>
        <div className='middle'>
            <form onSubmit={(e)=> e.preventDefault(false)}>
                {/* <i class="bx bx-search" id="player"></i> */}
                <input type="search" id="searchInput" placeholder="search"/>
                <button class="stay" onClick={expandSearch} id="searchBtn"><IoSearchOutline className='aa' /></button>
                {/* <a href="" class="log_in"><i class="bx bx-user-circle"></i> <span>Sign in</span></a> */}
            </form>
            <button className='micro'><HiMicrophone className='aa'/> </button>
        </div>
        <div className='right'>
            <button><HiOutlineDotsVertical className='aa' /></button>
            <a href=''><FaRegCircleUser className='aa' /> Sign in</a>
        </div>
    </header>
  )
}

export default Header