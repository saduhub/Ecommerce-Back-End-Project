const productsLink = document.getElementById('productsLink');

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


function createProductCards(data: ProductsResponse) {
    console.log(data)
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