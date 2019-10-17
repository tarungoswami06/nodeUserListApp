const User = require('../Models/user');



module.exports.getUsers = async (req,res) => {
    User.find(function(err, users) {    
        res.send(users);  
      });
}