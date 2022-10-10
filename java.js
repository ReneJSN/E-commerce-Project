let http = new XMLHttpRequest();

http.open('get', 'product.json', true);

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText);
        let output = "";
        for(let item of products){
            output += `
            <div class="product">
                <img src="${item.image}" alt="${item.image}">
                <p class="title">${item.title}</p>
                <p class="description">${item.description}</p>
                <p class="price">
                    <span>${item.price}</span>
                    <span>&dollar;</span>
                </p>
                <p class="cart">Purchase <i class="fa fa-cart-alt"></i></p>
            </div>`;
        }
        document.querySelector(".product").innerHTML = output;
    }
}