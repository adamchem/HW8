var Form = require("../models/form");

module.exports = function(req, res, next){
    form.findOneAndUpdate({_id: body.params.id}, req.body, function(err, users){
        if(err) throw err;
        console.log('updated');
        Form.find({}, function(err, users){
            if(err) throw err;

            res.json({userinfos: users});
        });
    });
};