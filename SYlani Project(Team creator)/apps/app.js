const login = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        window.location = 'creatTeam.html'
        const user = userCredential.user;
        console.log(user);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
    });
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function signup() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(username, email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            window.location = 'creatTeam.html'
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}

// TeamCreat Coodin

function creat(){
    const teamName = document.getElementById("teamName").value;
    const teamCategory = document.getElementById("teamCategory").value;
    const teamCategoryEmail = document.getElementById("teamCategoryEmail").value;
    console.log(teamName, teamCategory, teamCategoryEmail)
  }