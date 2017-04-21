var Form = require("../models/form");

module.exports = function(req, res, next){
    Form.findOne({_id: req.params.id}, function(err, user){
        if(err) throw err;
        console.log('readed');
       
        res.json({userinfo: user});
    });
};