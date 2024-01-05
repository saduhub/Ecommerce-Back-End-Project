const productsLink = document.getElementById('productsLink');
const cardContainer = document.getElementById('card-container');

interface ProductTag {
    id: number;
    product_id: number;
    tag_id: number;
}

interface Tag {
    id: number;
    tag_name: string;
    product_tag?: ProductTag;
}

interface Product {
    id: number;
    product_name: string;
    price: number;
    stock: number;
    category_id: number;
    category: {
        id: number;
        category_name: string;
    };
    tags: Tag[];
}

// The response would be an array of product objects. Each product should also include category and tag information if available.
type ProductsResponse = Product[];

class ProductCard {
    // No external code can change the product structure unexpectedly and cuase bugs.
    private product: Product;

    constructor(product: Product) {
        this.product = product;
    }

    // Method to generate HTML for each product card (Not sanitized on this demo).
    generateHtml(): string {
        const tags = this.product.tags.map(tag => tag.tag_name).join(', ');
        const imageUrl = `https://picsum.photos/seed/${this.product.id}/200/300`; // Placeholder image

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

function createProductCards(data: ProductsResponse) {
    if(cardContainer instanceof HTMLDivElement) {
        // Clear container.
        cardContainer.innerHTML = '';
        // Create a new ProductCard for each product and add to the card container.
        data.forEach(product => {
            const productCard = new ProductCard(product);
            cardContainer.innerHTML += productCard.generateHtml();
        });
    } else {
        console.error('Card container element not found');
        return;
    }
}

// Check if the element is indeed an HTMLAnchorElement (anchor tag). Can add loading indicator function to show and hide loading message while code excecutes.
if(productsLink instanceof HTMLAnchorElement) {
    productsLink.addEventListener('click', function(event) {
        event.preventDefault();  

        fetch('/api/products')
            .then((response: Response) => {
                if (!response.ok) {
                    throw new Error('Server Error');
                }
                return response.json();
            })
            .then((data: ProductsResponse):void => {
                // console.log(data)
                createProductCards(data);
            })
            .catch((error: Error) => {
                console.error('Error:', error.message);
            });
    });
} else {
    console.error('Link (front-end) is not working!');
}