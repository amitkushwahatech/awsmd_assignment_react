import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'
import './iStyle/smartMob.css'
import {scroll_list} from '../data/data.jsx';
const SmartMob = () => {

    const [scrollData, setScrollData] = useState(scroll_list);
    console.log(scrollData);
  return (
    <div style={{positionTop: "24px",background: "#0d0f11",position:"relative"}}>
        <div className='svg_bg'>
        <svg className="dev-line_line_svg__b39Po" viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style={{strokeDasharray: "3246.53, 0",width:"1157px"}}></path></svg>
        </div>
        <div className="mob_content_box">
            <Marquee speed={200} direction='right'>
                <p>Data driven user focused value based</p>
            </Marquee>
        </div>

        <div className="mob_content_box" style={{paddingInline: "40px", marginInline: "auto"}}>
           <div className="mob_content_text">
            <h2 className="context_mob_title">
                <span className='mob_maint_title'>&#123;SMART &#125; 
                <br/> DEVELOPMENT
                </span>
                <span className='mob_maint_title_star'>
                    **
                </span>
            </h2>
           </div>

           <div className="mob_content_dev">
            <p>
            Making your business outstanding is a science. We take it &#40;a&#41; seriously and &#40;b&#41; creatively.
            </p>
            <div style={{display: "flex"}}>
                <button className="btn_style btn_1">Check our portfolio</button>
                <button className="btn_style btn_2" >Get in touch</button>
               
            </div>
           </div>

           {/* mob up down anim  */}
           <div className="mob_two_anim">
           <img alt="phone-left" decoding="async" data-nimg="fill" className="dev_mob2" style={{position:"absolute",
           height:"100%",
           width:"100%",
           left:"0",top:"0",right:"0",bottom:"0",
           color:"transparent"
           }} sizes="100vw" src="https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphone-01.9afcffea.png%3Fq%3D90%26fm%3Dwebp&w=3840&q=75"/>
           <img alt="phone-left" decoding="async" data-nimg="fill" className="dev_mob1" style={{position:"absolute",
           height:"100%",
           width:"100%",
           left:"0",top:"0",right:"0",bottom:"0",
           color:"transparent"
           }} sizes="100vw" src="https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphone-02.cbcae9b6.png%3Fq%3D90%26fm%3Dwebp&w=3840&q=75"/>
           </div>

           {/* scroll mobile  */}

           <div className="scroll_mobile_container">
             <div className="scroll_screen_wrap">
                 <div className="wrap_screen">
                    <ul className='wrap_ul'>
                        {scrollData[0].list1.map((i)=>(
                             <li className='wrap_li' key={i.id}>
                             <div className='wrap_div'>
                                {i.image ? <img className='warp_img' src={i.image} alt="scrll" style={{
                                    position: "absolute",
                                    height:" 100%",
                                    width: "100%",
                                    left: 0,
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    color: "transparent"
                                }}/>:""}
                             
                              </div> 
                          </li>
                        ))}
                    
                    </ul>
                    <ul className='wrap_ul'>
                        {scrollData[1].list2.map((i)=>(
                             <li className='wrap_li' key={i.id}>
                             <div className='wrap_div'>
                                {i.image ? <img className='warp_img' src={i.image} alt="scrll" style={{
                                    position: "absolute",
                                    height:" 100%",
                                    width: "100%",
                                    left: 0,
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    color: "transparent"
                                }}/>:""}
                             
                              </div> 
                          </li>
                        ))}
                    
                    </ul>
                    <ul className='wrap_ul'>
                        {scrollData[2].list3.map((i)=>(
                             <li className='wrap_li' key={i.id}>
                             <div className='wrap_div'>
                                {i.image ? <img className='warp_img' src={i.image} alt="scrll" style={{
                                    position: "absolute",
                                    height:" 100%",
                                    width: "100%",
                                    left: 0,
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    color: "transparent"
                                }}/>:""}
                             
                              </div> 
                          </li>
                        ))}
                    
                    </ul>
         
                 </div>
                 <div className="mob_hand">
                    <div className="mob_hand_div">
                        <img className="mob_hand_img" src="https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.509eef57.png%3Fq%3D90%26fm%3Dwebp&w=1200&q=75" data-nimg="fill" alt="holding_hand_mobile" 
                        style={{position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent",}}/>

                            <div className="hand_mob_video">
                            <video muted
  autoPlay
  loop  src="https://awsmd.com/media/development/phone.mp4"  ></video>
 
                            </div>
                    </div>
                    </div>
             </div>
           </div>
        </div>


    </div>
  )
}

export default SmartMob