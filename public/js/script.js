"use strict";
const productsLink = document.getElementById('productsLink');
function createProductCards(data) {
    console.log(data);
}
// Check if the element is indeed an HTMLAnchorElement (anchor tag). Can add loading indicator function to show and hide loading message while code excecutes.
if (productsLink instanceof HTMLAnchorElement) {
    productsLink.addEventListener('click', function (event) {
        event.preventDefault();
        fetch('/api/products')
            .then((response) => {
            if (!response.ok) {
                throw new Error('Server Error');
            }
            return response.json();
        })
            .then((data) => {
            // console.log(data)
            createProductCards(data);
        })
            .catch((error) => {
            console.error('Error:', error.message);
        });
    });
}
else {
    console.error('Link (front-end) is not working!');
}
