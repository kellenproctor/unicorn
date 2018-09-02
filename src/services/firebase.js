// ./src/services/firebase.js
import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBTSQVo3k2KyEExaULT8toq4UZELU7dmUs',
  authDomain: 'unicorn-b66dd.firebaseapp.com',
  databaseURL: 'https://unicorn-b66dd.firebaseio.com',
  projectId: 'unicorn-b66dd',
  storageBucket: 'unicorn-b66dd.appspot.com',
  messagingSenderId: '1044799415571',
}

class Firebase {
  constructor() {
    firebase.initializeApp(config)
    this.store = firebase.firestore
    this.auth = firebase.auth
  }

  get polls() {
    return this.store().collection('polls')
  }
}

export default new Firebase()
