import React from 'react'
import Img from 'gatsby-image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ImageCarousel = props => {
  const { imgClassName, photos = [], type = 'fluid', style } = props
  return (
    <Carousel showArrows showThumbs={false}>
      {photos.map((e, i) => (
        <div key={i} style={style}>
          {type === 'fixed' ? (
            <Img className={imgClassName} fixed={e.childImageSharp.fixed} fadeIn />
          ) : (
            <Img className={imgClassName} fluid={e.childImageSharp.fluid} fadeIn />
          )}
        </div>
      ))}
    </Carousel>
  )
}

export default ImageCarousel
