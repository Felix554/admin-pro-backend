const { Schema, model, SchemaType, Collection } = require("mongoose");//Importamos la libreria de mongoose

//Creamos el Schema y Su definicion
const MedicoSchema = Schema({
    nombre: {
        type: String,
        required:true
    },
   
    img: {
        type: String,
    },
    //Usuario que creo el Hospital
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    //Referencia
    //[] para cuando un medico esta en varios hospitales
    hospital:[{
        type: Schema.Types.ObjectId,
        ref: 'Hospital'
    }]
    //Para definir el nombre de el Schema como queremos y permanesca todo en Spanis
});

/*MODIFICAR LA NOMENCLATURA DEL CAMPO _id por udi
*Esto es para fines visuales y no me modifica la Base de Datos
*/
MedicoSchema.method('toJSON', function(){
    //Obtener la instancia del objeto actual
    /**
     * Extraigo los siguientes valores de ese objeto
     * __v, _id,password, ...Object y no los muestre en el resultado
     */
    const {__v, ...Object }=this.toObject();

    Object.uid = _id;
    return Object;
})
/**
 * La tabla usuario se realiza en singular porque mongoose al crearla por defecto le agrega una S para colocarla en plural
 */
module.exports = model('Usuario', MedicoSchema);
