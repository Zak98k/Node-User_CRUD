const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    fullName: {
        type: String,
        requared: true
    },
    email: {
        type: String,
        requared: true,
        unique: true
    },
    age: {
        type: Number,
        requared: true,
    },
    isActive:{
        type: Boolean,
        requared: true,
        default: true
    },
    password: {
        type: String,
        requared: true,
        select: false
    },
    role:{
        type:Number,
        requared:true,
        select:false,
        default: 2
    }
});

const User=mongoose.model('User',Schema);

module.exports=User;