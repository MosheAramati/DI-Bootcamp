fetch("http://localhost:3003/api/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const html = data.map(item => {
        return `<div>
            ${item.name} ${item.price}
        </div>`
    });
    document.getElementById('root').innerHTML += html.join('')
  })
  .catch((e) => {
    console.log(e);
  });

function addProduct (){
  const name = document.getElementById('name').value
  const price = document.getElementById('price').value
  fetch("http://localhost:3003/api/products",{
    method: 'POST',
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify({name, price})
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const html = data.map(item => {
        return `<div>
            ${item.name} ${item.price}
        </div>`
    });
    document.getElementById('root').innerHTML += html.join('')
  })
  .catch((e) => {
    console.log(e);
  });
}
