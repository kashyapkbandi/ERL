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
    
    console.log('initializeApp firebase');
    
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


//recaptchaVerifier
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'normal',
    'callback': function(response) {
      // reCAPTCHA solved, allow signInWithPhoneNumber , redirected to Login Page.
        window.alert('--'+response);
      window.location = 'https://emergencyresourcelocator.herokuapp.com/login'+'?captchaResponse='+response;

    },
    'expired-callback': function() {
      // Response expired. Ask user to solve reCAPTCHA again.
      // ...
    }
  });



