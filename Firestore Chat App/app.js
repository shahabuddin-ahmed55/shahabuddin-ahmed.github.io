console.log("Shahabuddin");
const firebaseConfig = {
  apiKey: "AIzaSyAeJmgkkML1HzyHTatIdsiMacyZhlK1tvg",
  authDomain: "chat-app-f8346.firebaseapp.com",
  projectId: "chat-app-f8346",
  storageBucket: "chat-app-f8346.appspot.com",
  messagingSenderId: "48759623743",
  appId: "1:48759623743:web:7f119ea10628730e3a688a",
  measurementId: "G-BKDPQXWGQH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password");
  auth.signInWithEmailAndPassword(email, password)
  .ca
}
