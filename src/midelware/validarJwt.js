const jwt= require("jsonwebtoken");
const User = require("../models/user")
const validarJWT= async(req, res, next)=>{
    const token = req.headers.token;

    if(!token){
        res.status(400).json({
            msg:'No token received'
        })
    }
    try {
        const {uid}=jwt.verify(token, process.env.SECRET)
        const user = await User.findById(uid)


        if(!user){
            res.status(400).json({
                msg:'No se encontró usuario'
            })
        }

        req.user = user;
        next()
    } catch (error) {
        console.log(error)
        res.status(400).json({
            msg:'Error de autenticación'
    })
    }

    


}

module.exports=validarJWT