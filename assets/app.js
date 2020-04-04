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
firebase.auth().useDeviceLanguage();

//recaptchaVerifier
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'normal',
    'callback': function(response) {
      // reCAPTCHA solved, allow signInWithPhoneNumber , display mobile field.
     var loginForm= document.querySelector('.login-form');
     loginForm + loginForm + `<form action="" method="get">
     <div class="avatar"><i class="material-icons">&#xE7FF;</i></div>
     <h4 class="modal-title">Enter your mobile number</h4>
     <div class="form-group">
         <input type="text" class="form-control" name="mobile" id="mobileField" placeholder="mobilenumber" 
         required="required" display="none">
     </div>
     
     
     <input type="submit" class="btn btn-primary btn-block btn-lg" value="Login">              
     </form>`;
     

    },
    'expired-callback': function() {
      // Response expired. Ask user to solve reCAPTCHA again.
      // ...
    }
  });

// var phoneNumber = '+918897116194';
var appVerifier = window.recaptchaVerifier;




firebase.auth().signInWithPhoneNumber('918897116194', appVerifier)
.then(function (confirmationResult) {
// SMS sent. Prompt user to type the code from the message, then sign the
// user in with confirmationResult.confirm(code).

window.alert('user Confirm');
// enable the fields and button on the login page
window.confirmationResult = confirmationResult;
}).catch(function (error) {
// Error; SMS not sent
// ...
});


