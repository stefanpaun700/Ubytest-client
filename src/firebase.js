import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3VAFuK8TKS-3VUwqH1L_ssZsj4Dq2bio",
  authDomain: "ecommerce-e1c81.firebaseapp.com",
  projectId: "ecommerce-e1c81",
  storageBucket: "ecommerce-e1c81.appspot.com",
  messagingSenderId: "549925988997",
  appId: "1:549925988997:web:a22c9873d2f58d498a17ec"
};

// initialize firebase app
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
