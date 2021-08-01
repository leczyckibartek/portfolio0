import React from 'react'
import './style.scss'
import Intro from '../../../../../animations/Intro'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-scroll-parallax';

function CustomBlock({images: img, files: file, fields: field, wysiwygs: wysiwyg, maps: map, delay: del}) {

	const [io, ioInView] = useInView({ triggerOnce: true })
  
  return (
		<>
	    <div ref={io}>
        {/* <Intro visible={ioInView} in={{ fadeBottom: 1000 }} delayIn={125} mounted={true} stay={true} className={``}> */}
        <Parallax className="custom-class" y={[50, -20]} tagOuter="figure">
          <Intro visible={ioInView} in={{ slideBottom: 1000 }} delayIn={125} mounted={true} stay={true} className={``}>
            <h1 className={`font1 wysiwyg-inject`} dangerouslySetInnerHTML={{__html: field[0]}} />
          </Intro>
          <Intro visible={ioInView} in={{ slideBottom: 1000 }} delayIn={125} mounted={true} stay={true} className={``}>
            <h1 className={`wysiwyg-inject`} dangerouslySetInnerHTML={{__html: field[1]}} />
          </Intro>
          </Parallax>
        {/* </Intro> */}
      </div> 
		</>
	)
}

export default CustomBlock