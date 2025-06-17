// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields');
        e.preventDefault();  // Prevents form submission if validation fails
    } else {
        alert('Form submitted successfully!');
    }
});
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset&&top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
}

// Toggle menu function
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Send message function for WhatsApp
function sendMessage() {
    var message = document.getElementById("message").value;
    var phoneNumber = "+919845583783";  // Replace with your WhatsApp number including country code

    if (message.trim() === "") {
        alert("Please enter a message before sending.");
        return;
    }

    // Encode the message to handle spaces and special characters
    var encodedMessage = encodeURIComponent(message);

    // Construct the WhatsApp URL
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodedMessage;

    // Open the WhatsApp URL in a new tab
    window.open(whatsappURL, '_blank');
}
