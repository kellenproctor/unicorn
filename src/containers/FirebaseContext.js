// ./src/containers/FirebaseProvider.js
import React from 'react'
import firebase from '../services/firebase'

const FirebaseContext = React.createContext(firebase)

export default FirebaseContext
