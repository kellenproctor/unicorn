// ./src/containers/FirebaseProvider.js
import React from 'react'
import firebase from '../services/firebase'

export const Firebase = React.createContext(firebase)

const FirebaseProvider = ({ element }) => {
  return (
    <Firebase.Provider firebase_browser={firebase}>
      {element}
    </Firebase.Provider>
  )
}

export default FirebaseProvider
