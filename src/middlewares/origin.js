const checkSession = (req, res, next) => {
    const headerAuth = req.headers.authorizaion ||  "";
    console.log(req)
    //TODO BEARER
    const token = headerAuth.split( ' ').pop() //1111
    if(!token){
        res.status(405);
        res.send({error: "no tienes token"});
    }else{
        next();
    }
};

module.exports = { checkSession };
