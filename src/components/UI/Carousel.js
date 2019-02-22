import React from 'react'
import Img from 'gatsby-image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const PhotoCarousel = ({ photos = [] }) => (
  <Carousel showArrows={true} showThumbs={false}>
    {photos.map((e, i) => (
      <div key={i}>
        <Img fluid={e.childImageSharp.fluid} fadeIn />
      </div>
    ))}
  </Carousel>
)

export default PhotoCarousel
