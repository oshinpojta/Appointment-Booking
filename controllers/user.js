const User = require("../models/user");

exports.getAllUsers = async (req, res, next) => {
    try{
        let users = await User.findAll();
        console.log(users);
        res.json(users);
    }catch(err){
        console.log(err);
    }
};

exports.postAddUser = async (req, res, next) => {
    try{
        console.log(req);
        const userName = req.body.name;
        const userEmail = req.body.email;
        const userPhone = req.body.phone;
        let result = await User.create({
            name : userName,
            email : userEmail,
            phone : userPhone
        });
        console.log("Created User ",result);
        res.json(result);
    }catch(err){
        console.log(err);
    }
}

exports.deleteUser = async (req, res, next) => {
    try{
        let userId = req.params.id;
        console.log(req.params);
        let user = await User.findByPk(userId);
        console.log(user);
        let result = await user.destroy();
        console.log("User Destroyed");
        res.json(result);
    }catch(err){
        console.log(err);
    }

}