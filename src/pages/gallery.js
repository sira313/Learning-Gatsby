import React, { Component } from 'react'
import Layout from '../components/HOC/Layout'
import SEO from '../components/Utility/SEO'
import TopBar from '../components/Navigation/TopBar'
import logo from '../images/aflasiowhite.png'

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
        <section>{/* TODO: Add columns x3 */}</section>
      </Layout>
    )
  }
}

export default Gallery
