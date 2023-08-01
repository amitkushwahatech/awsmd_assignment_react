import React , {useEffect,useRef}from 'react'

const CardVideo = ({card_title,card_para,card_video}) => {
    

// const vidRef=useRef();

// useEffect(() => { vidRef.current.play(); },[]);
  return (
    <div className='about_card'>
    <div className='about_card_content'>
        <h3>{card_title}</h3>
        <p>{card_para}</p>
    </div>
    <video   
  muted
  autoPlay
  loop  className='about_h_video'>
        <source src={card_video} type="video/mp4"/>
        {/* <source src={"https://awsmd.com/media/about/volchek-color.mp4"} type="video/mp4"/> */}
    </video>
    </div>
  )
}

export default CardVideo