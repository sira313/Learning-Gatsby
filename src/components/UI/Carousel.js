import React from 'react'
import Img from 'gatsby-image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const PhotoCarousel = ({ photos = [], type = 'fluid' }) => (
  <Carousel showArrows showThumbs={false}>
    {photos.map((e, i) => (
      <div key={i}>
        {type === 'fixed' ? (
          <Img fixed={e.childImageSharp.fixed} fadeIn />
        ) : (
          <Img fluid={e.childImageSharp.fluid} fadeIn />
        )}
      </div>
    ))}
  </Carousel>
)

export default PhotoCarousel
