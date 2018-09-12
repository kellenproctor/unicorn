// ./src/containers/FirebaseProvider.js
import React from 'react'

import firebase from '../services/firebase'
import Firebase from './FirebaseContext'

const FirebaseProvider = ({ element }) => {
  return (
    <Firebase.Provider firebase_browser={firebase.auth}>
      {element}
    </Firebase.Provider>
  )
}

export default FirebaseProvider
