let http = new XMLHttpRequest();//the variable http holds all methods and properties of the object.

http.open('get', 'product.json', true);//1 arg. sets the http method, 2 arg. passes the file where the date is stored, 3 we set the keyword true that sets the request to be async

http.send();//now we send the request
//now to catch the response
http.onload = function(){// inside the function we check the readystate and status properties
    if(this.readyState == 4 && this.status == 200){//if we have a successful response, i have to parse the json data and convert them to a javascript array
        let products = JSON.parse(this.responseText);
        let output = "";// empty variable to add the incoming data
        for(let item of products){//now we have to loop through the product, and in every iteration, we add an html template to the output variable
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
        document.querySelector(".product").innerHTML = output;//now we target the product container and add the data that the output variable holds.
    }
}