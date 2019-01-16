const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cats');

//const Cat = mongoose.model('Cat', { name: String });

const kittySchema=
                    new mongoose.Schema({
                        name:String,
                        color:String,
                        race: String,
                        lifes:Number
                    });

kittySchema.methods.speak = function(){
    let greeting = this.name ? "Meow name is " + this.name
    : "I don't have a name";
    console.log(greeting);
}

kittySchema.methods.restarVida = function(){
    this.lifes--;
}

const Gato = mongoose.model('Gato', kittySchema);





const kitty =  new Gato({
    name:"Misifú",
    color:"Blanco",
    race:"Siamés",
    lifes:7
});

kitty
    .save()
    .then(() => console.log('meow'));

