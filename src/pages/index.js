import React from 'react'
import Layout from '../components/HOC/Layout'
import SEO from '../components/Utility/SEO'
import TopBar from '../components/Navigation/TopBar'
import logo from '../images/aflasiodark.png'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <section className='hero is-fullheight is-light'>
      <div className='hero-head'>
        <TopBar logoSrc={logo} />
      </div>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1 className='title'>Aflasio</h1>
          <h1 className='subtitle'>Welcome To My Gatsby Site!</h1>
        </div>
      </div>
    </section>
    <section className='hero is-fullheight'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1 className='title'>My Latest Project</h1>
          <h1 className='subtitle'>Here you can see my latest projects!</h1>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
