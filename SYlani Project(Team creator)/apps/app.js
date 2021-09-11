
// const firebaseConfig = {
//     apiKey: "AIzaSyBiFcFQd-MiM-4wIHyb_jK_fdFgIE_MQAg",
//     authDomain: "team-creater.firebaseapp.com",
//     projectId: "team-creater",
//     storageBucket: "team-creater.appspot.com",
//     messagingSenderId: "861396692052",
//     appId: "1:861396692052:web:9a4e92566bd920431391c1",
//     measurementId: "G-K0WWBHH7R9"
//   };

//    // Initialize Firebase
//    firebase.initializeApp(firebaseConfig);

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//       console.log(user);
//       document.getElementById("user").innerHTML = user.email;
//       document.getElementById("login_box").style.display = "none";
//       document.getElementById("welcome_box").style.display = "block";
//   } else {
//       document.getElementById("login_box").style.display = "block";
//       document.getElementById("welcome_box").style.display = "none";
//   }
// });

// function login() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     console.log(email, password);



//     firebase.auth().signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log(user);
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorMessage);
//             // ..
//         });
// }

// function logout() {
//     firebase.auth().signOut().then(() => {
//         // Sign-out successful.
//     }).catch((error) => {
//         // An error happened.
//     });
// }

// function signup() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     console.log(email, password);
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Signed in 
//             var user = userCredential.user;
//             // ...
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // ..
//         });
// } 

// const div1 = document.getElementsByClassName("teamDiv1");


// const login = () => {
//     const email = document.getElementsByClassName("email").value;
//     const password = document.getElementsByClassName("password").value;
// }

const signUp = value => {
    alert("ok");

}  