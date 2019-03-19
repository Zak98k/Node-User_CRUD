module.exports=(err,req,res)=>{
        res.status(err.status).send(err)
    };


