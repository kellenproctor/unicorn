// ./src/containers/FirebaseProvider.js
import React from 'react'

import firebase from '../services/firebase'
import FirebaseContext from './FirebaseContext'

const FirebaseProvider = ({ element }) => {
  return (
    <FirebaseContext.Provider firebase={firebase}>
      {element}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider
