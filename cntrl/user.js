const UserModel = require('../models/user');

module.exports.createUser = (req, res) => {
    console.log(req.body);
    if (req.body && req.body.name) {
        UserModel.create(req.body)
            .then((doc) => {
                res.send({ message: 'User registered successfully', status: 200, data: doc })
            }).catch(err => {
                console.error(err);
            });
    } else {
        res.send("Failed to create");
    }

}


module.exports.getAllUsers = (req, res) => {
    UserModel.find()
        .then((docs) => {
            res.send({ message: 'User query successfull', status: 200, data: docs })
        }).catch(err => {
            console.error(err);
        });
}

module.exports.getUser = (req, res) => {
    if (req.params.id) {
        UserModel.find()
            .then((doc) => {
                res.send({ message: 'User query successfull', status: 200, data: doc })
            }).catch(err => {
                console.error(err);
            });
    } else {
        res.send("User id is missing");
    }
}

module.exports.updateUser = (req, res) => {
    if (req.params.id && req.body) {
        UserModel.updateOne({ _id: id }, { $set: req.body })
            .then((doc) => {
                res.send({ message: 'User update successfull', status: 200, data: doc })
            }).catch(err => {
                console.error(err);
            });
    } else {
        res.send("User id is missing");
    }
}

module.exports.deleteUser = (req, res) => {
    if (req.params.id) {
        UserModel.deleteOne({ _id: id })
            .then((doc) => {
                res.send({ message: 'User delete successfull', status: 200, data: doc })
            }).catch(err => {
                console.error(err);
            });
    } else {
        res.send("User id is missing");
    }
}




