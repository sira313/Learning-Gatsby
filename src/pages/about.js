import React, { Component } from 'react'
import Layout from '../components/HOC/Layout'
import SEO from '../components/Utility/SEO'
import TopBar from '../components/Navigation/TopBar'
import logo from '../images/aflasiowhite.png'
import profilePic from './gallery/seira/seira.jpg'
import wacomPic from '../images/wacom.jpg'

const seoKeywords = [
  'aflasio',
  'gallery',
  'artist',
  'flat design',
  'sira argia',
  'about',
  'graphic motion'
]

class about extends Component {
  render () {
    return (
      <Layout>
        <SEO title='about' keywords={seoKeywords} />
        <TopBar className='is-dark' logoSrc={logo} />
        <section className='hero'>
          <div className='hero-body has-background-light'>
            <div className='container'>
              <div className='box has-box-shadow'>
                <div className='columns'>
                  <div className='column is-two-fifths'>  
                    <figure className='image is-300x300 has-box-shadow'>
                      <img src={profilePic} alt='profile pic' />
                    </figure>
                  </div>
                  <div className='column'>
                    <h1 className='subtitle is-6'>
                      Hello...
                    </h1>
                    <h2 className='title is-3'>
                      I'm Sira Argia
                    </h2>
                    <h3 className='subtitle is-5'>
                      A hobby artist and FLOSS user
                    </h3>
                    <hr />
                    <table className='table-profile'>
                      <tr>
                        <th colSpan='1'></th>
                        <th colSpan='2'></th>
                      </tr>
                      <tr>
                        <td>Born</td>
                        <td>4 April 1994</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>Sanggau, West Kalimantan, Indonesia</td>
                      </tr>
                      <tr>
                        <td>Job</td>
                        <td>Freelance Illustrator</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td><a href='mailto:sira.argia@gmail.com'>sira.argia@gmail.com</a> </td>
                      </tr>
                      <tr>
                        <td>Tools</td>
                        <td>
                          <a href="https://krita.org">Krita</a>, <a href="https://gimp.org">Gimp</a>, <a href="https://inkscape.org">Inkscape</a>
                        </td>
                      </tr>
                    </table>
                    <hr />
                    <h4 className='subtitle is-6'>
                      <i>"Art and love are the same thing: It’s the process of seeing yourself in things that are not you."</i> <strong>― Pablo Picasso</strong>
                    </h4>
                  </div>
                </div>
              </div>
              <div className='box has-box-shadow'>
                <div className='columns'>
                  <div className='column'>
                    <h4 className='title is-4'>
                      My Skills
                    </h4>
                    <hr />
                    <p>
                      <strong>Krita</strong>
                      <br />
                      <progress className='progress is-small is-dark' value='80' max='100'></progress>
                      <strong>Gimp</strong>
                      <br />
                      <progress className='progress is-small is-dark' value='60' max='100'></progress>
                      <strong>Inkscape</strong>
                      <br />
                      <progress className='progress is-small is-dark' value='80' max='100'></progress>
                      <strong>Character Painting</strong>
                      <br />
                      <progress className='progress is-small is-dark' value='70' max='100'></progress>
                      <strong>Design</strong>
                      <br />
                      <progress className='progress is-small is-dark' value='75' max='100'></progress>
                    </p>
                  </div>
                  <div className='column is-two-fifths'>  
                    <figure className='image is-300x300 has-box-shadow'>
                      <img src={wacomPic} alt='wacom pic' />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

// todo: add plugin image

export default about
