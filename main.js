// Function to toggle the visibility of the navigation list at media query 767px
function openNavList() {
    let navlist = document.querySelector('nav');
    navlist.classList.toggle("show");
}

// Initialize global variables for shop data
let allShopData = [];
let allFeaturedData = [];
let allAddressesData = [];
let allShoesData = [];

// Execute the script when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    let elementInCart = document.querySelector('.element-in-cart');
    let cartProduct = [];

    // Function to add an item to the cart
    function addElement(id) {
        if (allShopData && allShopData[id]) {
            cartProduct.push(allShopData[id]);
            cartElement();
        } else {
            console.error('Invalid product ID or shop data not loaded.');
        }
    }

    // Function to render cart elements
    function cartElement() {
        elementInCart.innerHTML = ''; // Clear previous content

        let totalPrice = 0;

        for (let index = 0; index < cartProduct.length; index++) {
            let product = cartProduct[index];
            let productTotalPrice = product.price;

            totalPrice += productTotalPrice;

            elementInCart.innerHTML += `
                <tr>
                    <td>
                        <a href="#" onclick="removeElement(${index}); return false;">
                            <i class="fa-regular fa-trash-can"></i>
                        </a>
                    </td>
                    <td>
                        <img src="${product.img}" alt="${product.name}">
                    </td>
                    <td>
                        <h4>${product.name}</h4>
                    </td>
                    <td>
                        <h4>$${product.price.toFixed(2)}</h4>
                    </td>
                    <td>
                        <input type="number" value="1" min="1" onchange="updateQuantity(${index}, this.value)">
                    </td>
                    <td>
                        <h4 id="total-price-${index}">$${productTotalPrice.toFixed(2)}</h4>
                    </td>
                </tr>
            `;
        }

        // Display total price
        elementInCart.innerHTML += `
            <tr>
                <td colspan="5"><strong>Total:</strong></td>
                <td>
                    <h4>$${totalPrice.toFixed(2)}</h4>
                </td>
            </tr>
        `;
    }

    // Function to remove an item from the cart
    function removeElement(index) {
        cartProduct.splice(index, 1);
        cartElement();
    }

    // Function to update the quantity of an item and recalculate the total
    function updateQuantity(index, quantity) {
        quantity = parseInt(quantity, 10);
        if (isNaN(quantity) || quantity < 1) {
            quantity = 1; // Ensure quantity is at least 1
        }

        let product = cartProduct[index];
        let price = product.price;
        let totalPrice = price * quantity;

        // Update the total price for this row
        document.getElementById(`total-price-${index}`).innerText = `$${totalPrice.toFixed(2)}`;

        // Update total price in the cart
        let overallTotalPrice = cartProduct.reduce((sum, prod, i) => sum + prod.price * (i === index ? quantity : 1), 0);
        elementInCart.querySelector('tr:last-child h4').innerText = `$${overallTotalPrice.toFixed(2)}`;
    }

    // Example usage of addElement (You may need to replace this with actual usage)
    // addElement(0); // Assuming there's a product with ID 0 in allShopData
});
