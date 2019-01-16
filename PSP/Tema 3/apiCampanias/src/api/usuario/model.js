import mongoose, { Schema } from 'mongoose'

const usuarioSchema = new Schema({
  nombre: {
    type: String
  },
  apellidos: {
    type: String
  },
  email: {
    type: String
  },
  campania: [{
    type: Schema.Types.ObjectId,
    ref: 'Campania'
  }],
  
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

usuarioSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      nombre: this.nombre,
      apellidos: this.apellidos,
      email: this.email,
      campania: this.campania
      
    },

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Usuario', usuarioSchema)

export const schema = model.schema
export default model
