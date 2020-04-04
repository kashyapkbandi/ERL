// debug to see the entry

window.alert("Loading please wait !");



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



