	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.25,
		category: "fruits",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Alice_%28apple%29.jpg/180px-Alice_%28apple%29.jpg"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.35,
		category: "bakery",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Breadindia.jpg/191px-Breadindia.jpg"
	},
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		category: "vegetables",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/220px-Broccoli_and_cross_section_edit.jpg"
	},
	{
		name: "chicken soup",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 2.00,
		category: "soups",
		image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/AH_canned_chicken_soup.jpg/170px-AH_canned_chicken_soup.jpg"
	},
	{
		name: "cream",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.00,
		category: "dairy",
		image: "https://dks22p812qygs.cloudfront.net/UserFiles/ib_product/15801453605e2f1ad00c991-190x190.jpg"
	},
	{
		name: "deluxe gluten sauce",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 99.99,
		category: "cooking",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Sauce_boat.jpg/220px-Sauce_boat.jpg"
	},
	{
		name: "enhanced carrots",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 4.75,
		category: "vegetables",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/220px-Vegetable-Carrot-Bundle-wStalks.jpg"
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.50,
		category: "dairy",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/220px-Glass_of_Milk_%2833657535532%29.jpg"
	},
	{
		name: "orange juice",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.50,
		category: "beverages",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Oranges_and_orange_juice.jpg/235px-Oranges_and_orange_juice.jpg"
	},
	{
		name: "oranges",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.00,
		category: "fruits",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mandarin_Oranges_%28Citrus_Reticulata%29.jpg/220px-Mandarin_Oranges_%28Citrus_Reticulata%29.jpg"
	},
	{
		name: "pork ribs",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 9.00,
		category: "meat",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Smoked_country_style_pork_ribs.jpg/220px-Smoked_country_style_pork_ribs.jpg"
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00,
		category: "meat",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lake_Washington_Ship_Canal_Fish_Ladder_pamphlet_-_ocean_phase_Sockeye.jpg/220px-Lake_Washington_Ship_Canal_Fish_Ladder_pamphlet_-_ocean_phase_Sockeye.jpg"
	},
	{
		name: "soda",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.00,
		category: "beverages",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Tumbler_of_cola_with_ice.jpg/220px-Tumbler_of_cola_with_ice.jpg"
	},
	{
		name: "Transformers(R) Biscuits [NICOTINE WARNING]",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 9.99,
		category: "bakery",
		image: "https://geekculture.co/wp-content/uploads/2019/08/unicron-galvatron.jpg"
	},
	{
		name: "vegetable oil",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.15,
		category: "cooking",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Olive_oil_from_Oneglia.jpg/145px-Olive_oil_from_Oneglia.jpg"
	},
	{
		name: "vegetable soup",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.00,
		category: "soups",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Vegetable_udon_noodle_soup.jpg/240px-Vegetable_udon_noodle_soup.jpg"
	}
];

function compare( a, b ) {
  if ( a.price < b.price ){
    return -1;
  }
  if ( a.price > b.price ){
    return 1;
  }
  return 0;
}

products.sort(compare);


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, category) {
	let product_names = [];

	for (let i=0; i<prods.length; i+=1) {
		if((prods[i].category == category) || (category == "all")){
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "Organic") && (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "VegetarianGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "GlutenFreeOrganic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "VegetarianOrganic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "All") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}
			else if (restriction == "None"){
				product_names.push(prods[i].name);
			}
		}
	}
	return product_names;
}

function restrictListPrices(prods, restriction, category) {
	let prices = [];

	for (let i=0; i<prods.length; i+=1) {
		if((prods[i].category == category) || (category == "all")){
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "Organic") && (prods[i].organic == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "VegetarianGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "GlutenFreeOrganic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "VegetarianOrganic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "All") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				prices.push(prods[i].price);
			}
			else if (restriction == "None"){
				prices.push(prods[i].price);
			}
		}
	}
	return prices;
}

function restrictListImages(prods, restriction, category) {
	let images = [];

	for (let i=0; i<prods.length; i+=1) {
		if((prods[i].category == category) || (category == "all")){
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "Organic") && (prods[i].organic == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "VegetarianGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "GlutenFreeOrganic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "VegetarianOrganic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "All") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				images.push(prods[i].image);
			}
			else if (restriction == "None"){
				images.push(prods[i].image);
			}
		}
	}
	return images;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
