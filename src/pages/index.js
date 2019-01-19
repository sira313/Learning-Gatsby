import React from 'react'
import Layout from '../components/HOC/Layout';
import SEO from '../components/Utility/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome To My Gatsby Blog!</h1>
  </Layout>
)

export default IndexPage
