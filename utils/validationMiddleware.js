const yup = require('yup');
const User = require("../models/user.model");
const AppError = require('./AppError');

const SchemaBody = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email(),
    age: yup
        .number()
        .required()
        .positive()
        .integer(),
    isActive: yup.boolean()
        .required(),
    password: yup.string()
        .required()
});

module.exports.body = (req, res, next) => {
    SchemaBody.validate(req.body)
        .then(b => {
            if (b)
                next();
            else
                next(new AppError.lackOfUserParameters('Fill in all fields, from validationMiddleware!'));
        }).catch();
};


module.exports.email = (req, res, next) => {
    User.find({email: req.body.email})
        .then(em => {
            if (em) {
                next(new AppError.wrongEmail('The email you specified is already existing, from validationMiddleware'));
            } else {
                next();
            }
        }).catch(
        () => next(new AppError.userFoundError("Wrong email, from validationMiddleware"))
    );
};

module.exports.id = (req, res, next) => {
    User.findById(req.params.id)
        .then(user => {
            if (user) {
                next();
            } else {
                next(new AppError.userFoundError("User not found, from validationMiddleware"));
            }
        })
        .catch(
            () => next(new AppError.userFoundError("Some problems with the user id., from validationMiddleware"))
        );
};

