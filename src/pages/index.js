import React from 'react'
import Layout from '../components/HOC/Layout'
import SEO from '../components/Utility/SEO'
import TopBar from '../components/Navigation/TopBar'
import logo from '../images/aflasiowhite.png'
import GalleryBoxes from '../components/UI/Gallery/GalleryBoxes'
import { graphql } from 'gatsby'
import Banner from '../components/UI/Banner'

const seoKeywords = [
  'aflasio',
  'gallery',
  'artist',
  'flat design',
  'graphic motion'
]

const Index = ({ data }) => {
  const { edges } = data.gallery
  // categories is automatic created by post category distinctly
  const categories = edges
    .map(e => e.node.frontmatter.category)
    .filter((v, i, e) => e.indexOf(v) === i)

  function onSearch (e) {
    console.log('SEARCH FOR: ', e)
  }

  return (
    <Layout>
      <SEO title='Home' keywords={seoKeywords} />
      <TopBar className='is-dark' logoSrc={logo} />
      <section className='section has-background-light'>
        <div className='container'>
          <Banner categories={categories} onSearch={onSearch} />
          <GalleryBoxes edges={edges} />
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    gallery: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { postType: { eq: "gallery" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
            coverIndex {
              childImageSharp {
                fluid(maxWidth: 480, maxHeight: 320) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Index
