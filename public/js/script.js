"use strict";
const productsLink = document.getElementById('productsLink');
const viewProductsBtn = document.getElementById('viewProductsBtn');
const cardContainer = document.getElementById('card-container');
class ProductCard {
    constructor(product) {
        this.product = product;
    }
    // Method to generate HTML for each product card (Not sanitized on this demo).
    generateHtml() {
        const tags = this.product.tags.map(tag => tag.tag_name).join(', ');
        const imageUrl = `https://picsum.photos/seed/${this.product.id}/200/200`; // Placeholder image
        return `
            <div class="col-xl-2 col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card h-100">
                    <img src="${imageUrl}" class="card-img-top" alt="${this.product.product_name}">
                    <div class="card-body">
                        <h5 class="card-title">${this.product.product_name}</h5>
                        <p class="card-text">${this.product.category.category_name}</p>
                        <p class="card-text"><small class="text-muted">${tags}</small></p>
                    </div>
                </div>
            </div>
        `;
    }
}
function createProductCards(data) {
    if (cardContainer instanceof HTMLDivElement) {
        // Clear container.
        cardContainer.innerHTML = '';
        // Create a new ProductCard for each product and add to the card container.
        data.forEach(product => {
            const productCard = new ProductCard(product);
            cardContainer.innerHTML += productCard.generateHtml();
        });
    }
    else {
        console.error('Card container element not found');
        return;
    }
}

// Products Nav Link 
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

//View products button  
if (viewProductsBtn instanceof HTMLAnchorElement) {
    viewProductsBtn.addEventListener('click', function (event) {
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
