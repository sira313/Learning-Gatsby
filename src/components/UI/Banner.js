import React, { useEffect } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PhotoCarousel from './Carousel'
import CategoryBar from '../Navigation/CategoryBar'

const Banner = ({ categories = [], onSearch }) => {
  useEffect(() => {
    // Append inline style to Carousel to make top border rounded
    if (!document) return
    const carousel = document.querySelector('.carousel')
    if (carousel) {
      carousel.style.cssText +=
        'border-top-left-radius: 6px; border-top-right-radius: 6px;'
    }
  })

  return (
    <div className='box has-box-shadow is-paddingless'>
      <div className='hero is-white' style={{ borderRadius: '6px' }}>
        <div className='hero-body is-paddingless'>
          <StaticQuery
            query={imageQuery}
            render={data => (
              <PhotoCarousel
                photos={data.images ? data.images.edges.map(e => e.node) : []}
              />
            )}
          />
        </div>
        <div className='hero-foot'>
          <CategoryBar categories={categories} onSearch={onSearch} />
        </div>
      </div>
    </div>
  )
}

const imageQuery = graphql`
  query {
    images: allFile(filter: { relativeDirectory: { eq: "banner" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Banner
