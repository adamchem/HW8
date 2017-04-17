var Form = require("../models/form");

module.exports = function(req, res, next){
    form.findOne({_id: body.params.id}, function(err, users){
        if(err) throw err;
        console.log('readed');
       
        res.json({userinfos: users});
    });
};