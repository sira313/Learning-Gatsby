import React from 'react'
import Layout from '../components/HOC/Layout'
import SEO from '../components/Utility/SEO'
import TopBar from '../components/Navigation/TopBar'
import logo from '../images/aflasiowhite.png'
import landingPage from '../images/landingPage.svg'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <section className='hero is-fullheight has-bg-img is-dark'>
      <div className='hero-head'>
        <TopBar logoSrc={logo} />
      </div>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <div className='columns is-vcentered'>
            <div className='column is-5'>
              <figure className='image is-4by3'>
                <img src={landingPage} alt='Aflasio' />
              </figure>
            </div>
            <div className='column is-6 is-offset-1'>
              <h1 className='title is-2'>
                Aflasio
              </h1>
              <h2 className='subtitle is-4'>
                Hello.. My name is Sira Argia. I am an artist who use FLOSS for work.
              </h2>
              <br />
              <Link to='/' className='button is-medium is-light is-outlined'>
                More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
