import firebase from 'firebase';
var Config = {
    apiKey: "AIzaSyD2uPhzcdk5-yvMtgDtumnL1XbXByh10Fs",
    authDomain: "chat-app-956e4.firebaseapp.com",
    databaseURL: "https://chat-app-956e4.firebaseio.com",
    projectId: "chat-app-956e4",
    storageBucket: "chat-app-956e4.appspot.com",
    messagingSenderId: "876230161824",
    appId: "1:876230161824:web:ba520b6e07f33b56"
  };

  var fire = firebase.initializeApp(Config);
  export default fire;