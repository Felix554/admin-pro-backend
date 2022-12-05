const mongoose = require('mongoose'); //importamos el paquete

const dbConnection = async() => {

        try {
            /*await mongoose.connect('mongodb+srv://mean_user:7Bx3geK0cUDyXKdr@cluster0.yuhs3jo.mongodb.net/hospitaldb',{
                useNewUrlParse: true,
                useInifiedTopology: true,
                useCreateIndex: true
            });*/
            await mongoose.connect(process.env.DB_CNN);

            console.log('BD Online');
        } catch (error) {

            console.log(error);
            throw new Error('Error a la hora de Iniciar Base de Datos Ver LOGS');
        }
   

    //const Cat = mongoose.model('Cat', { name: String });

    //const kitty = new Cat({ name: 'Zildjian' });
    //kitty.save().then(() => console.log('meow'));
}

//Para poder esportar este objete a otra parte del codigo
module.exports ={
    dbConnection
}