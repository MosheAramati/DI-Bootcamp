const{db} = require('../config/db.js')

const register = (email, password) => {
    return db ('users').insert({email, password}, ["id", "email"])
}
const login = (email)=>{
    return db ('users').select("id", "email", "password").where({email})
}

const allUsers = ()=>{
    return db ('users').select("id", "email", "password")
}

module.exports ={
    register,
    login,
    allUsers,
}