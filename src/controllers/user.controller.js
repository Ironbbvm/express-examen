const User = require('../models/user')
const Ctrl = {}
const bcrypt= require('bcrypt');


Ctrl.getUser = async (req, res)=>{
    const users = await user.find();

    res.json(users);   
}


Ctrl.registerUser = async (req, res)=>{
    try {
        const { username, email, password } = req.body

        if(!username&&!email&&!password){
            res.status(400).json({
                msg: 'Try again'
            })
        }

        const newPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({
            username, email, password: newPassword
        });

        await newUser.save();

        res.json({
            msg: 'User created',
            
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: ''
        })
    }

}
Ctrl.deleteUser=(res , req)=>{
    
}

module.exports=Ctrl;