import React from 'react'
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiMicrophone } from "react-icons/hi2";
import { FiArrowLeft } from "react-icons/fi";

var mq = window.matchMedia("(max-width: 768px)");

function noSearch() {

}
function expandSearch() {
    let hid = document.getElementById("hid");
    var input = document.getElementById("searchInput");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var micro = document.getElementById("micro");
    
    
    if(mq.matches && input.style.width === "") {
        hid.style.display = 'block'
        console.log("i does work now match");
        input.style.width = "100%";
        input.style.display = 'block'
        micro.style.display = 'block'
        left.style.display = 'none'
        right.style.display = 'none'
        //     right.style.display = 'none'
        // if (input.style.width === "0px" || input.style.width === "") {
        //     input.style.display = 'block'
        //     left.style.display = 'none'
        //     right.style.display = 'none'
        //     input.style.width = "100%";
        //     btn.style.backgroundColor = "#555";
        // } else {
        //     left.style.display = 'block'
        //     right.style.display = 'block'
        //     input.style.display = 'none'
        //     input.style.width = "0px";
        //     btn.style.backgroundColor = "#333";
        // }
    }

  }
  function closeSearch(){
    var input = document.getElementById("searchInput");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var micro = document.getElementById("micro");
    let hid = document.getElementById("hid");
    if(hid.style.display == 'block'){
        console.log('this is arrow');

        input.style.width = "0";
        input.style.display = 'none'
        micro.style.display = 'none'
        left.style.display = 'block'
        right.style.display = 'block'
        hid.style.display = 'none'
    }
  }
  

const Header = () => {
  return (
    <header>
        <div id='left'>
            <button><FiMenu className='aa' /> </button>
            <a href=''><img className="style-scope ytd-yoodle-renderer" src="https://www.gstatic.com/youtube/img/promos/growth/b251157af68c83ca83a31a0174662bf602ff6ffba92e34ed7fc68fcf0d38658d_122x56.webp" alt="Street eats" /></a>  
        </div>
        <div id='middle'>
            <form onSubmit={(e)=> e.preventDefault(false)}>
                {/* <i className="bx bx-search" id="player"></i> */}
                <button id='hid' onClick={closeSearch}><FiArrowLeft /></button>
                
                <input type="search" id="searchInput" placeholder="search"/>
                <button className="stay" onClick={expandSearch} id="searchBtn"><IoSearchOutline className='aa' /></button>
                {/* <a href="" className="log_in"><i className="bx bx-user-circle"></i> <span>Sign in</span></a> */}
            </form>
            <button id='micro'><HiMicrophone className='aa'/> </button>
        </div>
        <div id='right'>
            <button><HiOutlineDotsVertical className='aa' /></button>
            <a href=''><FaRegCircleUser className='aa' /></a>
        </div>
    </header>
  )
}

export default Header