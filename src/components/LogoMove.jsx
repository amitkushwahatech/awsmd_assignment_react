import React, {useState} from 'react'
import './iStyle/logoMove.css'
import Marquee from "react-fast-marquee";
import {movelogo_img} from '../data/data.jsx';
const LogoMove = () => {
    const [logolist,setLgolist] = useState(movelogo_img);

  return (
    <Marquee pauseOnHover="false">
        <ul className='logo_movelist'>
            {logolist.map((i)=>(
                 <li className='logo_movelistitem' key={i.id}>
                 <img src={i.image} alt="bv" />
             </li>
            ))}
            <li className='logo_movelistitem'>
                <img src="https://awsmd.com/_next/static/media/uber.391ab754.svg" alt="" />
            </li>
        </ul>
    </Marquee>
  )
}

export default LogoMove