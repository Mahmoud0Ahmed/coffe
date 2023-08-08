window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})

var loader = document.getElementById("loader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function formValidate() {
    const Name = document.getElementById("name").value;
    const Email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const error = document.getElementById("error");
    let text = '';

    if (Name.length < 4) {
        text = "Please enter a valid name.";
        error.innerHTML = text;
        return false;
    } else if (Email.indexOf("@") == -1 || Email.length < 15) {
        text = "Please enter a valid email.";
        error.innerHTML = text;
        return false;
    } else if (isNaN(phone) || phone.length != 11) {
        text = "Please enter a valid phone number.";
        error.innerHTML = text;
        return false;
    } else {
        alert("Done");
        return true;
    }
}

function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
    };
  
const serviceID = "service_j5pxcaw";
const templateID = "template_jzoy49e";
emailjs
.send(serviceID, templateID, params)
.then((res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        console.log(res);
        alert("your message send successfully");
    })
    .catch((err) => console.log(err));
}  
