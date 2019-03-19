const User = require("../models/user.model");

module.exports.getAllUsers = (req, res, next) => {
    User.find().then(user => {
        if (user)
            res.send(user);
        else
            throw new Error("Users not found, from userController");
    })
        .catch(err => next(err));
};

module.exports.getUserById = (req, res, next) => {
    User.findById(req.params.id)
        .select('-__v -isActive')
        .then( user=>res.send(user))
        .catch(err => next(err));
};

module.exports.createUser = (req, res, next) => {
    const user = new User(req.body);
    user.save()
        .then(savedUser => {
            res.send(savedUser);
        }).catch(err => {
        next(err);
    })
};

module.exports.deleteUser = (req, res, next) => {
    User.deleteOne({_id: req.params.id})
        .then(deletedUser => {
            res.send(deletedUser);
        }).catch(err => next(err));
};

module.exports.updateUser = (req, res, next) => {
    User.updateOne({_id: req.params.id}, req.body)
        .then(updatedUser => {
            if (updatedUser) {
                res.send(updatedUser);
            } else {

                throw new Error("User for update not found, from userController");
            }
        }).catch(err => next(err));
};