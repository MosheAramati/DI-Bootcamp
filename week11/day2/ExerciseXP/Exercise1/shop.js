const {products} = require("./products.js")

//console.log (products)

function findProduct(arr, product) {
    for(let i=0; i <arr.length; i++){
        if (arr[i].name === product){
            console.log(arr[i]) ;
        }
    }
}

const product = "iphone"

findProduct(products, product
    )