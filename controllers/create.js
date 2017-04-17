var Form = require("../models/form");

module.exports = function(req, res, next){
    var form = new Form(req.body);
    form.save(function(err){
        if(err) throw err;
        console.log('created');
        Form.find({}, function(err, users){
            if(err) throw err;
            res.json({userinfos: users});
        });
    });
};
