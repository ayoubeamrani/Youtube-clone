import React from 'react';
import { GoHomeFill } from "react-icons/go";


const Sidebtn = (props) => {
  return (
    <a href='' className='Sidebtn'id={props.id} >
        {props.mySvg}
        <i className={props.btnSrc}></i>
        <p>{props.btnName}</p>
    </a>
  )
}

export default Sidebtn