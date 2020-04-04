// debug to see the entry

window.alert("Loading please wait !");


var param = getUrlVars();
param = param.split("?mobile=")[1];

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyAPKUxofW3dbDv_XBwmoBs6f8JBQe59kL4",
authDomain: "emergency-resource-locator.firebaseapp.com",
databaseURL: "https://emergency-resource-locator.firebaseio.com",
projectId: "emergency-resource-locator",
storageBucket: "emergency-resource-locator.appspot.com",
messagingSenderId: "706279289325",
appId: "1:706279289325:web:e7440c4df5d237b395b7e4"
};

console.log('initializeApp firebase');



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().useDeviceLanguage();

//recaptchaVerifier
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
alert('splpit'+param);

// var phoneNumber = '+918897116194';
var appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(param, appVerifier)
.then(function (confirmationResult) {
// SMS sent. Prompt user to type the code from the message, then sign the
// user in with confirmationResult.confirm(code).

window.alert('user Confirm');

window.confirmationResult = confirmationResult;
}).catch(function (error) {
// Error; SMS not sent
// ...
});

function getUrlVars() {
    var vars = {};
    var parts = window.location.href;
    alert(parts);
    return vars;
}