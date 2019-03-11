import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PhotoCarousel from './Carousel'

const Banner = props => {
  return (
    <div className='box has-box-shadow'>
      <StaticQuery
        query={imageQuery}
        render={data => (
          <div>
            <PhotoCarousel
              photos={data.images ? data.images.edges.map(e => e.node) : []}
              type='fixed'
            />
          </div>
        )}
      />
    </div>
  )
}

const imageQuery = graphql`
  query {
    images: allFile(filter: { relativeDirectory: { eq: "banner" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 800, height: 420, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default Banner
