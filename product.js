const product = JSON.parse(localStorage.getItem("selectedProduct"));

if(product){

    document.getElementById("product-image").src = product.image;

    document.getElementById("product-name").innerText = product.name;

    document.getElementById("product-price").innerText = product.price;

}
const sizeSelect = document.querySelector("select");

function updateWhatsAppLink(){

    let size = sizeSelect.value;

    document.getElementById("whatsapp-link").href =
    `https://wa.me/919586979982?text=Hello Nikita Shoes Collection, mujhe ${product.name} (Size ${size}) order karna hai.`;
}

updateWhatsAppLink();

sizeSelect.addEventListener("change", updateWhatsAppLink);
document.getElementById("add-cart-btn").addEventListener("click", function(){

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartItems.push({
        name: product.name,
        price: product.price,
        image: product.image,
        size: sizeSelect.value
    });

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    alert("Product Added to Cart ✅");

});