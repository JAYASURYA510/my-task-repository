 // Fetch data from the API
 fetch("https://fakestoreapi.com/products")
 .then(response => response.json())
 .then(data => {
   // Process the data
   data.forEach(product => {
     // Create a product element for each item
     const productElement = document.createElement("div");
     productElement.classList.add("product");

     // Create an image element for the product image
     const image = document.createElement("img");
     image.src = product.image;
     image.alt = product.title;
     productElement.appendChild(image);

     // Create a heading element for the product title
     const title = document.createElement("h2");
     title.textContent = product.title;
     productElement.appendChild(title);

     // Create a paragraph element for the product price
     const price = document.createElement("p");
     price.textContent = "Price: $" + product.price;
     productElement.appendChild(price);

     // Append the product element to the products div
     document.getElementById("products").appendChild(productElement);
   });
 })
 .catch(error => console.log(error));