import React from 'react'
import as from '../assets/13.jpg';
import barylg from '../assets/13_lg.jpg';

const Video = (props) => {
  return (
    <a href='' className='video'>
        <img src={props.thum} alt='thumbnail' />
        <div className='vidInfo' >
          <img src={props.log} alt='logo' />
          <div className='info' >
            <p className='title'>{props.title}</p>
            <p className='channel'>{props.channel}</p>
            <p class="less">{props.views} · {props.date}</p>
          </div>
        </div>
    </a>
  )
}

export default Video