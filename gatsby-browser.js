/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// ./gatsby-browser.js
// import FirebaseProvider from './src/containers/FirebaseProvider'

// export const wrapRootElement = FirebaseProvider
import React from 'react'
import Layout from './src/components/layout'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}