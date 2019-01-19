import React from 'react'
import Layout from '../components/HOC/Layout'
import SEO from '../components/Utility/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <section className='hero is-fullheight is-primary'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1 className='title'>Aflasio</h1>
          <h1 className='subtitle'>Welcome To My Gatsby Site!</h1>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
