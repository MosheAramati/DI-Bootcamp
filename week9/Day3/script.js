// JSON
const product =
`[
    {
        "product_id":2,
        "product_name":"iPhone16",
        "price":12000,
        "description":"The new iPhone 16"
    }
]`;

console.log(product);

const productOBJ = JSON.parse(product);
console.log(productOBJ[0].description);
const {product_id, product_name, price, description} = productOBJ[0]

document.getElementById('root').innerHTML =`
<h1>${product_name}</h1>
<h2>${price}</h2>
<h3>${description}</h3>
`;

let users =[
    {id: 1, username: 'aaa'},
    {id: 2, username: 'bbb'},
    {id: 3, username: 'ccc'},
];

const replacer = (key, value) => {
    if(typeof value === 'string'){
        return undefined
    }
    return value
}

console.log(JSON.stringify(users, replacer, 2));

