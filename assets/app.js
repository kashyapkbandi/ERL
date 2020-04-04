// debug to see the entry

window.alert("Loading please wait !");


const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');

console.log(usersRef);