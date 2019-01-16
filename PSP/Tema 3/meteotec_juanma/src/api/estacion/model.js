import mongoose, { Schema } from 'mongoose'

const estacionSchema = new Schema({
  nombre: {
    type: String
  },
  latitud: {
    type: String
  },
  longitud: {
    type: String
  },
  caracteristicas: {
    type: String
  },
  ubicacion: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

estacionSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      nombre: this.nombre,
      latitud: this.latitud,
      longitud: this.longitud,
      caracteristicas: this.caracteristicas,
      ubicacion: this.ubicacion,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Estacion', estacionSchema)

export const schema = model.schema
export default model
