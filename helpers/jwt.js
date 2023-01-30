const jwt = require('jsonwebtoken');

const generarJWT = (uid) => {

    return new Promise( (resolve, reject) => {

        const payload = {
            uid,
        };
    
        //Crear el Token
        jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: '24h'
        }, (err, token) => {
    
            if(err){
                console.log(err);
                reject('No se pud generar el JWT');
            }else{
                resolve(token);
            }
    
        });

    });
}

module.exports={
    generarJWT
}