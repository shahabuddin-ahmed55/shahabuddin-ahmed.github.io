const login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location = "creatTeam.html";
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

function signup() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      window.location = "creatTeam.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

// TeamCreat Coodin

function creat() {
    const teamName = document.getElementById("teamName").value;
    const teamCategory = document.getElementById("teamCategory").value;
    const teamCategoryEmail = document.getElementById("teamCategoryEmail").value;
    const forDiv = document.getElementById("teamYouOwn");
    const div = document.createElement('span');
    window.location = "team.html";
    div.appendChild(teamName);
    div.appendChild(teamCategory);
    div.appendChild(teamCategoryEmail);
    const element = forDiv.appendChild(div);
    console.log(div);
}

function skip() {
  window.location = "team.html";
}
