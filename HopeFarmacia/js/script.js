let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const messageContainer = document.getElementById("contact-form-message");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "enviar_formulario.php", true);
        xhr.onload = function() {
            if (xhr.status === 200 && xhr.responseText === "success") {
                messageContainer.textContent = "¡El mensaje se ha enviado correctamente!";
                contactForm.reset();
                setTimeout(function() {
                    messageContainer.textContent = ""; // Limpiar el mensaje después de 5 segundos
                }, 5000);
            } else {
                messageContainer.textContent = "¡Hubo un error al enviar el formulario!";
            }
        };
        xhr.send(formData);
    });
});




