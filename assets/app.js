// debug to see the entry

window.alert("Loading please wait !");

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
    
    console.log('Lodaing firebase');


    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    firebase.auth().useDeviceLanguage();

    //recaptchaVerifier
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    var phoneNumber = '8897116194';
    var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
.then(function (confirmationResult) {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).

    window.alert('user Confirm');

    window.confirmationResult = confirmationResult;
}).catch(function (error) {
    // Error; SMS not sent
    // ...
});
    

// const dbRef = firebase.database().ref();
// const usersRef = dbRef.child('users');

// console.log(usersRef);