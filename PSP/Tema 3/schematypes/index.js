

const mongoose = require('mongoose');
const moment = require('moment-timezone');
moment().tz.setDefault("Europe, Madrid");
mongoose.connect('mongodb://localhost/test');

const OpinionSchema = new mongoose.Schema({
    fecha:{
        type: Date,
        default: Date.now
    },
    texto:{
        type: String
    },
    usuario_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Persona'
    }
});

const Opinion = new mongoose.model('Opinion', OpinionSchema);

const PersonaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        uppercase: true,
        required: true,
        trim: true
    },

    fechaNacimiento:{
        type: Date,
    },

    aficiones:[{
        type: String,
        lowercase: true,
    }]
   /* opiniones:[{
        type: OpinionSchema
    }]*/
        
});


const Persona = new mongoose.model('Persona', PersonaSchema);


let juanma = new Persona();
juanma.nombre = 'Juanma';
juanma.fechaNacimiento = moment('07/05/1994', 'DD/MM/YYYY');
//juanma.aficiones.push('Comer');
//juanma.aficiones.push('Programar');
juanma.aficiones =['Comer', 'programar']

let opinion1 = new Opinion();
opinion1.texto = 'No entiendo que haya gente que no le gusten las albóndigas con patatas';

//juanma.opiniones.push(opinion1)
/*juanma
    .save()
    .then((data) =>{
        console.log(data)
        opinion1.usuario_id = data._id
        opinion1
                .save()
                .then((data) =>{
                    Persona
                        .find()
                        .exec()
                        .then((data) => console.log(data))


                    Opinion
                        .find()
                        .populate('persona_id')
                        .exec()
                        .then((data) => console.log(data))
                })
        .catch((error) => console.log(error));
    });*/

    
let publicacion = new Publicacion();
publicacion.titulo = 'Que ganas tengo de comer';
publicacion.autor = data._id

publicacion
    .save()
    .then((data2) =>{
        let opinion1 = new Opinion();
        
    })