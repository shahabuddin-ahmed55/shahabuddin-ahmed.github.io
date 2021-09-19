const firebaseConfig = {
  apiKey: "AIzaSyA5GAKkxG6JVe6Pskv99bMDvZvmMcvXFvQ",
  authDomain: "hackhaton-668d6.firebaseapp.com",
  projectId: "hackhaton-668d6",
  storageBucket: "hackhaton-668d6.appspot.com",
  messagingSenderId: "37871412480",
  appId: "1:37871412480:web:fcdaff8a1ea34110737fe5",
  measurementId: "G-JGJEFP1MY0"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();






function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    window.location = 'level1.html'
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    document.getElementById("id01").style.display = "block";
    document.getElementById("signip").style.display = "none";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}
function logout(){
  auth.signOut()
  .then(
    document.getElementById("user").innerText = "Logout Successfuly....."
  )
}


// Add a new document in collection "cities"
firestore.collection("player").doc("pl.uid").set({
  email,
  lastLoggedIn: new Date()
})
.then(() => {
  console.log("Document successfully written!");
})
.catch((error) => {
  console.error("Error writing document: ", error);
});

