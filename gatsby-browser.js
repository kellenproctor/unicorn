/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// ./gatsby-browser.js
/* eslint-disable react/prop-types, import/no-extraneous-dependencies */
import React from 'react'
import { Router } from 'react-router-dom'
import FirebaseProvider from './src/containers/FirebaseProvider'

import firebase from './src/services/firebase'

const replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) => (
    <FirebaseProvider firebase={firebase}>
      <Router history={history}>{children}</Router>
    </FirebaseProvider>
  )

  return ConnectedRouterWrapper
}

export default replaceRouterComponent
