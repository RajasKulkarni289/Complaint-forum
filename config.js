import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyADwm9BNb6-0EVq_otNtl41scIwSeCDu-Y",
  authDomain: "complaint-forum-e3cb7.firebaseapp.com",
  projectId: "complaint-forum-e3cb7",
  storageBucket: "complaint-forum-e3cb7.appspot.com",
  messagingSenderId: "32171852106",
  appId: "1:32171852106:web:ba4c99f97d8e73ff0d41b3"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

