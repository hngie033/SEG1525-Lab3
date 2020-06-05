
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

// set default tab colours
document.addEventListener('DOMContentLoaded', function() {
	openInfo(event, 'Client');
	document.getElementsByClassName("tablinks")[0].style.backgroundColor = "#abb";
}, false);


// wizard-style progress tabs
function tabColour(index){
	document.getElementsByClassName("tablinks")[0].style.backgroundColor = "white";
	document.getElementsByClassName("tablinks")[1].style.backgroundColor = "white";
	document.getElementsByClassName("tablinks")[2].style.backgroundColor = "white";
	for(i = 0; i <= index; i++){
		document.getElementsByClassName("tablinks")[i].style.backgroundColor = "#abb";	
	}
}

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}
	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos
function populateListProductChoices(slct1, slct2, category) {
	//document.getElementById("div1").innerHTML = slct1;
    	//var s1 = document.getElementById(slct1);
    	var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    	s2.innerHTML = "";
		
	// obtain a reduced list of products, prices, and images based on restrictions
    	var optionArray = restrictListProducts(products, slct1, category);
	var priceArray = restrictListPrices(products, slct1, category);
	var imageArray = restrictListImages(products, slct1, category);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName + " ($" + priceArray[i] + ")"));
		s2.appendChild(label);
		
		// create thumbnail for the checkbox
		s2.appendChild(document.createElement("br"));   
		var img = document.createElement('img');
		img.src = imageArray[i];
		s2.appendChild(img);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
	s2.appendChild(document.createTextNode("-----End of results-----"));
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price
function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
	openInfo(event, 'Cart');
	tabColour(2);
}

// additional-step function before populating list to handle checkboxes
function applyFilters(){
	var category = document.getElementById("categorySelect").value;
	var x = document.getElementById('filter1');
	var y = document.getElementById('filter2');
	var z = document.getElementById('filter3');
	var slct1 = "None";	
	
	if(!x.checked && !y.checked && !z.checked){
		slct1 = "None";
	}else if(!x.checked && !y.checked && z.checked){
		slct1 = "Organic";
	}else if(!x.checked && y.checked && !z.checked){
		slct1 = "GlutenFree";
	}else if(!x.checked && y.checked && z.checked){
		slct1 = "GlutenFreeOrganic";
	}else if(x.checked && !y.checked && !z.checked){
		slct1 = "Vegetarian";
	}else if(x.checked && !y.checked && z.checked){
		slct1 = "VegetarianOrganic";
	}else if(x.checked && y.checked && !z.checked){
		slct1 = "VegetarianGlutenFree";
	}else if(x.checked && y.checked && z.checked){
		slct1 = "All";
	}
	populateListProductChoices(slct1, 'displayProduct', category);
}

function start(){
	var category = document.getElementById("categorySelect").selectedIndex;
	document.getElementById("categorySelect").selectedIndex = category;
	applyFilters();
	openInfo(event, 'Products');
	tabColour(1);
}