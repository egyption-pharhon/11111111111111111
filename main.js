// open list items @ media 767px

function openNavList(){
	let navlist = document.querySelector('nav');
	navlist.classList.toggle("show");
}

// add items in cart

let allShopData ;
let allFeaturedData ;
let allAddressesData ;
let allShoesData ;

let  elementInCart = document.querySelector('.element-in-cart')
let cartProduct =[]
function addElement(id){
	cartProduct.push(allShopData[id]) 
	cartElement()
}
function cartElement(){
	let product = ""
	for (let index = 0; index < cartProduct.length; index++) {
		product +=`
			<tr>
				<td>
					<a href="cart.html">
						<i class="fa-regular fa-trash-can"></i>
					</a>
				</td>
				<td>
					<img src="${cartProduct[index].img}">
				</td>
				<td>
					<h4>${cartProduct[index].name}</h4>
				</td>
				<td>
					<h4>$${cartProduct[index].price}</h4>
				</td>
				<td>
					<input type="number" value="1">
				</td>
				<td>
					<h4>$92.00</h4>
				</td>
			</tr>
		`
	}
}





















