const User = require('../models/user')
const Ctrl = {}
const bcrypt= require('bcrypt');
const generarJWt = require('../helpers/generarJWT');



Ctrl.loginUser = async (req, res)=>{
    try {
        const {username, password }=req.body
        const user = await User.findOne({username});

        if (!user){
            res.status(400).json({
                ok:false,
                msg:'no user found'
            })
        } 

        const passwordIsValid= bcrypt.compareSync(password, user.password)
        
        
        if(!passwordIsValid){
            res.status(400).json({
                msg:'Password  Invalid'
            })
        }


        const token = await generarJWt({uid: user._id})

        return res.json({token})

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'Error al iniciar sesión'
        })
    }
}


module.exports=Ctrl;