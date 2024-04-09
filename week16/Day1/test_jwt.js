import jwt from 'jsonwebtoken'

// sign( {payload}, secret-code, {expire-time} )

// const myToken = jwt.sign(
//     {email: 'john@gmail.com', userid: 16},
//     "1234@5678",
//     {expiresIn: "30s" }
// );

// console.log(myToken);

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZ21haWwuY29tIiwidXNlcmlkIjoxNiwiaWF0IjoxNzEwMTc1Mjg4LCJleHAiOjE3MTAyNjE2ODh9.wuydLkd2n-yQbjKCfMgHU4gi2iNvaiDFYoPkYq32tZ8"
const token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZ21haWwuY29tIiwidXNlcmlkIjoxNiwiaWF0IjoxNzEwMTc1NzU5LCJleHAiOjE3MTAxNzU3ODl9.5lUz_Ddj3IJ-0-KDif5_54iFBgm-wkdkPo4wuaEuDbE"
// verufy(token, secret, (err, decode)=>{})

jwt.verify(token, "1234@5678", (err, decode)  =>{
    if(err) return console.log(err.message);

    console.log(decode);

})

jwt.verify(token2, "1234@5678", (err, decode)  =>{
    if(err) return console.log(err.message);

    console.log(decode);

})



