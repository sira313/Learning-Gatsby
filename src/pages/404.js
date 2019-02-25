import React from 'react'
import Layout from '../components/HOC/Layout'
import SEO from '../components/Utility/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <body>
      <section className='hero is-light is-fullheight'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <div className='column is-6 is-offset-3'>
              <h1 className='title'>
                Coming Soon
              </h1>
              <h2>
                This page is under construction.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </body>
  </Layout>
)

export default NotFoundPage
