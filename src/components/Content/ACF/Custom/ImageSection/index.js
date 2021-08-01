import React, { useEffect } from 'react'
import './style.scss'
import Intro from '../../../../../animations/Intro'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-scroll-parallax';
import ReactCursorPosition from 'react-cursor-position';

function CustomBlock(props) {
  console.log(props.position)
	const [io, ioInView] = useInView({ triggerOnce: true })
 
  const Wysiwyg = (props) => {

    let position = props.position
    let isPositionOutside = props.isPositionOutside
   
    useEffect(()=> {
      let color = document.querySelector('.color')
      
      if(!isPositionOutside) 
        color.classList.add('active')
      else 
        color.classList.remove('active')
      
      if(position.x > 0 && position.y > 1) {
        color.style.left = position.x + 'px'
        color.style.top = position.y + 'px'
      }
 
    }, [position, isPositionOutside]) 

    return(
      <div className=" content">
        <h1 className={`font1 wysiwyg-inject`} dangerouslySetInnerHTML={{__html: props.wysiwyg}} />
      </div>
    ) 
  } 


  return (
		<>
	    <div ref={io} className="flex-12">

          <ReactCursorPosition className="span-7 content-container">
            <Wysiwyg wysiwyg={props.wysiwygs[0]} />
          </ReactCursorPosition>
         
          <div className="span-5">
            <div className="img-container">
            <GatsbyImage image={props.images[0]} alt={''} />
            </div>
          </div>

      </div> 
		</>
	)
}

export default CustomBlock