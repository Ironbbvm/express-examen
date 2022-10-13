const jwt= require ('jsonwebtoken')

const generarJWt= (uid)=>{
    return new Promise((resolve, reject) => {
        jwt.sign(uid, process.env.SECRET,{
            expiresIn: 60*60
        }, (err, token)=>{
            if (err){
                reject(err)
            }
                
            resolve(token)
        })
    })
}

module.exports=generarJWt