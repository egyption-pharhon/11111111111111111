// product in webpage
fetch('product.json')
		.then(response => response.json())
		.then(data => {
			allShopData = data
			const products = document.querySelector('.shop .content');
			data.forEach( product => {
				products.innerHTML += `
					<div class="box">
						<div class="image">
							<img src="${product.img}">
						</div>
						<div class="stars">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
						</div>
						<p>${product.name}</p>
						<span>${product.price}</span>
						<button onclick="addElement(${product.id})">Add Cart</button>
					</div>`
			})
		})
fetch('featured.json')
		.then(response => response.json())
		.then(data => {
			allFeaturedData = data
			const products = document.querySelector('.featured .content');
			data.forEach( product => {
				products.innerHTML += `
					<div class="box">
						<div class="image">
							<img src="${product.img}">
						</div>
						<div class="stars">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
						</div>
						<p>${product.name}</p>
						<span>${product.price}</span>
						<button>Add Cart</button>
					</div>`
			})
		})
fetch('dresses&jumpsuits.json')
		.then(response => response.json())
		.then(data => {
			allAddressesData = data
			const products = document.querySelector('.dresses-jumpsuits .content');
			data.forEach( product => {
				products.innerHTML += `
					<div class="box">
						<div class="image">
							<img src="${product.img}">
						</div>
						<div class="stars">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
						</div>
						<p>${product.name}</p>
						<span>${product.price}</span>
						<button>Add Cart</button>
					</div>`
			})
		})
fetch('shoes.json')
		.then(response => response.json())
		.then(data => {
			allShoesData = data
			const products = document.querySelector('.shoes .content');
			data.forEach( product => {
				products.innerHTML += `
					<div class="box">
						<div class="image">
							<img src="${product.img}">
						</div>
						<div class="stars">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
						</div>
						<p>${product.name}</p>
						<span>${product.price}</span>
						<button>Add Cart</button>
					</div>`
			})
		})
			
		