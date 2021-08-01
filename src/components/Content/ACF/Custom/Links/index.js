import React from 'react'
import './style.scss'
import Intro from '../../../../../animations/Intro'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useInView } from 'react-intersection-observer'

function CustomBlock({images: img, files: file, fields: field, wysiwygs: wysiwyg, maps: map, delay: del}) {

	const [io, ioInView] = useInView({ triggerOnce: true })
  let links = wysiwyg.map((node, i) => {
    console.log(node)
    return (
      <Intro key={i} visible={ioInView} in={{ fadeTop: 1000 }} delayIn={i * 250} mounted={true} stay={true} className={``}>
        <h2 className={`wysiwyg-inject`} dangerouslySetInnerHTML={{__html: node}} />
      </Intro>
    )
  })
  return (
		<>
	    <div className="container" ref={io}>
        {links}
      </div> 
		</>
	)
}

export default CustomBlock