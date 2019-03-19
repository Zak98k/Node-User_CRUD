class AppError extends Error{
    constructor(message,status){
        super();
        Error.captureStackTrace(this,this.constructor);
        this.name=this.constructor.name;
        this.message=message||'Something wrong, from AppError\'!!!';

        this.status=status||500;
    }
}
module.exports=AppError;

class UserFoundError extends AppError{
    constructor(message){
        super(message||'User not found, from AppError',404);
    }
}
module.exports.userFoundError=UserFoundError;

class IdInsertError extends AppError{
    constructor(message){
        super(message||'User id not found, from AppError',404);
    }
}
module.exports.idInsertError=IdInsertError;


class WrongEmail extends AppError{
    constructor(message){
        super(message||'Email is not unique, from AppError\'',400);
    }
}
module.exports.wrongEmail=WrongEmail;

class LackOfUserParameters extends AppError{
    constructor(message){
        super(message||'Lack of body parameters, from AppError\'',400);
    }
}
module.exports.lackOfUserParameters=LackOfUserParameters;