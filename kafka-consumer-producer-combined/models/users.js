module.exports = (sequelize,DataTypes)=>{
    const user_data = sequelize.define('user_data',{
        first_name:DataTypes.STRING,
        last_name:DataTypes.STRING,
        gender:DataTypes.STRING,
        email:DataTypes.STRING,
        ip_address:DataTypes.STRING,
    })
    return user_data

}