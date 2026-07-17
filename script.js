const products = [

{
name:"Ladies Fashion Heels",
price:"₹1499",
image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"
},

{
name:"Party Wear Sandals",
price:"₹1299",
image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500"
},

{
name:"Pink Casual Sneakers",
price:"₹1399",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
},

{
name:"Comfort Flats",
price:"₹799",
image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500"
},

{
name:"Stylish Wedges",
price:"₹1499",
image:"https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=500"
},

{
name:"Daily Wear Sandals",
price:"₹999",
image:"https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500"
},

{
name:"Trendy Slip Ons",
price:"₹1199",
image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500"
},

{
name:"Premium Bellies",
price:"₹1099",
image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"
},

{
name:"White Sneakers",
price:"₹1499",
image:"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500"
},

{
name:"Designer Sandals",
price:"₹1299",
image:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500"
},

{
name:"Sports Running Shoes",
price:"₹1499",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
},

{
name:"Casual Sneakers",
price:"₹1399",
image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500"
},

{
name:"Black Formal Shoes",
price:"₹1499",
image:"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500"
},

{
name:"Loafers",
price:"₹1299",
image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"
},

{
name:"Walking Shoes",
price:"₹1199",
image:"https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500"
},

{
name:"White Casual Shoes",
price:"₹1399",
image:"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500"
},

{
name:"Slip On Casual Shoes",
price:"₹999",
image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500"
},

{
name:"Lightweight Sports Shoes",
price:"₹1499",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
},

{
name:"Street Sneakers",
price:"₹1499",
image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500"
},

{
name:"Daily Wear Shoes",
price:"₹1099",
image:"https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500"
}


];

const productList = document.getElementById("product-list");

products.forEach((product, index) => {
    const message = `👋 Thank you for your order!

Please send these details:

👤 Name:
📱 Mobile Number:
🏠 Full Address:
📍 PIN Code:
👟 Product Name: ${product.name}
📏 Shoe Size:
🎨 Color:
🔢 Quantity:
💳 Payment Method (COD/UPI):
📝 Special Note:

Thank you!
Nikita Shoes Collection ❤️`;

productList.innerHTML += `
<div class="product-card" onclick="openProduct(${index})">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p class="price">${product.price}</p>
<button class="buy-btn add-cart">
Add to Cart
</button>
<a href="https://wa.me/919586979982?text=${encodeURIComponent(message)}" target="_blank" onclick="event.stopPropagation();">

<button class="buy-btn">
Order on WhatsApp
</button>

</a>

</div>
</div>
`;

});
    const banners = [
    "newbanner.PNG",
    "banner2.jpg",
    "banner3.jpg"
];

let currentBanner = 0;

setInterval(() => {
    currentBanner++;
    
    if(currentBanner >= banners.length){
        currentBanner = 0;
    }

    document.getElementById("banner").src = banners[currentBanner];
}, 3000);
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

document.getElementById("cart-count").innerText = cartItems.length;

document.addEventListener("click", function(e){

    if(e.target.classList.contains("add-cart")){

        let card = e.target.closest(".product-card");

        let name = card.querySelector("h3").innerText;
        let price = card.querySelector(".price").innerText;

        let image = card.querySelector("img").src;

cartItems.push({
    name: name,
    price: price,
    image: image
});

        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        document.getElementById("cart-count").innerText = cartItems.length;
    }

});
document.getElementById("search-input").addEventListener("keyup", function() {
    let search = this.value.toLowerCase();
    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        let name = product.querySelector("h3").innerText.toLowerCase();

        if(name.includes(search)){
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
function openProduct(index){

    localStorage.setItem("selectedProduct", JSON.stringify(products[index]));

    window.location.href = "product.html";

}

