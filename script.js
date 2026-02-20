// Smooth scroll to contact
function scrollToContact() {
    document.getElementById("contactpage").scrollIntoView({
        behavior: "smooth"
    });
}

// Subscribe button
function subscribe() {
    let email = document.getElementById("emailInput").value;

    if (email === "") {
        alert("Please enter email!");
    } else {
        alert("Thank you for subscribing!");
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}