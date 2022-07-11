//Auto typed text
var typed = new Typed(".auto-input", {
    strings: ["Soumya Prakash Sahu", "Full Stack Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

//For Navbar Scroller
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
};

//For Navbar Hide on click
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
});

//For Contact input box
const inputs = document.querySelectorAll(".input");
function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

//Emailjs Function
const btn = document.getElementById('send_message_btn');

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    btn.value = 'Sending...';
    const serviceID = 'default_service';
    const templateID = 'template_3oj9jzg';
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});