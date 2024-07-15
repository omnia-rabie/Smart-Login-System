const signInBtnLink = document.querySelector('.signInBtn');
const signUpBtnLink = document.querySelector('.signUpBtn');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
    document.getElementById("login-tab").classList.remove("active");
    document.getElementById("register-tab").classList.add("active");
    document.getElementById("login-form").classList.remove("active");
    document.getElementById("register-form").classList.add("active");
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
    document.getElementById("login-tab").classList.add("active");
    document.getElementById("register-tab").classList.remove("active");
    document.getElementById("login-form").classList.add("active");
    document.getElementById("register-form").classList.remove("active");
});

var emailArray = [];
var passwordArray = [];

function register() {
    event.preventDefault();

    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    if (email == "") {
        alert("Email required.");
        return;
    }
    else if (password == "") {
        alert("Password required.");
        return;
    }
    else if (passwordRetype == "") {
        alert("Password required.");
        return;
    }
    else if (password != passwordRetype) {
        alert("Passwords don't match. Retype your Password.");
        return;
    }
    else if (emailArray.indexOf(email) == -1) {
        emailArray.push(email);
        passwordArray.push(password);

        alert(email + "  Thanks for registration. \nTry to log in now");

        document.getElementById("re").value = "";
        document.getElementById("rp").value = "";
        document.getElementById("rrp").value = "";
    }
    else {
        alert(email + " is already registered.");
        return;
    }
}

function login() {
    event.preventDefault();

    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;
    var i = emailArray.indexOf(email);

    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
            alert("Email required.");
            return;
        }
        alert("Email does not exist.");
        return;
    }
    else if (passwordArray[i] != password) {
        if (password == "") {
            alert("Password required.");
            return;
        }
        alert("Password does not match.");
        return;
    }
    else {
        alert(email + " you are logged in now. Welcome to our website.");

        document.getElementById("se").value = "";
        document.getElementById("sp").value = "";
        return;
    }
}