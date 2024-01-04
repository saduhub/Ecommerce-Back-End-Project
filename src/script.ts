const productsLink = document.getElementById('productsLink');

// Check if the element is indeed an HTMLAnchorElement (anchor tag)
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
            .then((data: any):void => {
                console.log(data)
            })
            .catch((error: Error) => {
                console.error('Error:', error.message);
            });
    });
} else {
    console.error('Link (front-end) is not working!');
}