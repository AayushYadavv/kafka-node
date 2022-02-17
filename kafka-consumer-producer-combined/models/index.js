const {Sequelize,DataTypes} = require('sequelize')
const sequelize = new Sequelize('users','root','',{
    host:'localhost',
    dialect:'mysql',

})

sequelize.authenticate().then(()=>{
    console.log('connected');
})
.catch(err=>{
    console.log(err)
})

const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.sequelize.sync()
.then(()=>{
    console.log("yes sync")
})
db.user_details = require("./users")(sequelize,DataTypes)

module.exports = db

