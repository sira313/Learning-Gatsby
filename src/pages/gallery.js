import React, { Component } from 'react'
import Layout from '../components/HOC/Layout'
import SEO from '../components/Utility/SEO'
import TopBar from '../components/Navigation/TopBar'
import logo from '../images/aflasiowhite.png'
import GalleryBoxes from '../components/UI/Gallery/GalleryBoxes'
import { graphql } from 'gatsby'

const seoKeywords = [
  'aflasio',
  'gallery',
  'artist',
  'flat design',
  'graphic motion'
]

class Gallery extends Component {
  render () {
    const { data } = this.props
    console.log(data) // TODO: Show all post data to GalleryBoxes
    return (
      <Layout>
        <SEO title='Gallery' keywords={seoKeywords} />
        <TopBar className='is-dark' logoSrc={logo} />
        <section className='section has-background-light'>
          <div className='container'>
            <GalleryBoxes />
          </div>
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

export default Gallery
