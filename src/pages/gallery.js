import React, { Component } from 'react'
import Layout from '../components/HOC/Layout'
import SEO from '../components/Utility/SEO'
import TopBar from '../components/Navigation/TopBar'
import logo from '../images/aflasiowhite.png'
import GalleryBoxes from '../components/UI/Gallery/GalleryBoxes'

const seoKeywords = [
  'aflasio',
  'gallery',
  'artist',
  'flat design',
  'graphic motion'
]

class Gallery extends Component {
  render () {
    return (
      <Layout>
        <SEO title='Gallery' keywords={seoKeywords} />
        <TopBar className='is-dark' logoSrc={logo} />
        <section className='section has-background-light'>
          <div className='container'>
            {/* TODO: Add columns x3 */}
            <GalleryBoxes />
          </div>
        </section>
      </Layout>
    )
  }
}

export default Gallery
