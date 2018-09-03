/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// ./gatsby-browser.js
import React from 'react'
import FirebaseProvider from './src/containers/FirebaseProvider'

import firebase from './src/services/firebase'

// prettier-ignore
const wrapRouteElement = ({ element }) => {
  const ConnectedRouterElement = (
    <FirebaseProvider firebase={firebase}>
      {element}
    </FirebaseProvider>
  )

  return ConnectedRouterElement
}

export default wrapRouteElement
