const User = require('../models/user');


module.exports.login = (req, res) => {
    console.log(req.body);
    if (req.body.userName && req.body.password) {
        User.findOne(req.body)
            .then(doc => {
                res.send({ message: "Login query successfull", data: doc });
            }).catch(err => {
                console.error(err);
                res.status(400).send({
                    message: 'Error occured'
                });
            });
    } else {
        res.status(400).send({
            message: 'Missing fields required'
        });
    }
}