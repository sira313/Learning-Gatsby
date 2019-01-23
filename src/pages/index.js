import React from 'react'
import Layout from '../components/HOC/Layout'
import SEO from '../components/Utility/SEO'
import TopBar from '../components/Navigation/TopBar'
import logo from '../images/aflasiodark.png'
import landingPage from '../images/landingPage.svg'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <section className='hero is-fullheight is-light'>
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
                Hello...
              </h1>
              <h2 className='subtitle is-4'>
                My name is Sira Argia. I am an artist who use FLOSS for work.
              </h2>
              <br />
              <Link to='/' className='button is-medium is-dark is-outlined'>
                More...
              </Link>
            </div>
          </div>
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
