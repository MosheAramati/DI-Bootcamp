const knex = require("knex");
const { rows } = require("pg/lib/defaults");

const db = knex({
    client: "pg",
    connection: {
      host: "127.0.0.1",
      port: 5433,
      user: "postgres",
      password: "123456",
      database: "postgres",
    },
});

module.exports = {db}

//console.log(db);
 
// db('products').select("id", "name", "price")
//  // .from("products")
//   .then((rows) => {
//     console.log(rows)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })

// db.raw(' insert into products (name,price) values('jeans' , 200 )')
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })

// insert
// db('products')
//   .insert([
//     {name: "samsung", price: 5000},
//   ],["id","name"])
//   .then((data) => {
//         console.log(data)
//       })
//       .catch((err)=>{
//         console.log(err)
//       });


//Update
// db('products')
//   .update({name: "iphone"},['*'])
//   .where({id: 6})
//   .then((data) => {
//         console.log(data)
//       })
//       .catch((err)=>{
//         console.log(err)
//       })

//Delete
// db('products')
// .del(['*'])
// .where({id: 6})
//     .then((data) => {
//         console.log(data)})
//     .catch((err)=>{
//         console.log(err)})