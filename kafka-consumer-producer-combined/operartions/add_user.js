let db = require('../models')
const user_data = db.user_details;

let addUser = async (data)=>{
    console.log("------------------------->",data)
    
    let query_res = await user_data.create({first_name:data.first_name,last_name:data.last_name,
    email:data.email,
gender:data.gender,
ip_address:data.ip_address})
   
}

module.exports = {
    addUser
}