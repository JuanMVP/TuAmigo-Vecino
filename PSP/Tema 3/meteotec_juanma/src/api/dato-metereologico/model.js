import mongoose, { Schema } from 'mongoose'

const datoMetereologicoSchema = new Schema({
  fecha_hora: {
    type: String
  },
  lluvia: {
    type: String
  },
  viento: {
    type: String
  },
  humedad: {
    type: String
  },
  temperatura: {
    type: String
  },
  num_estacion: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

datoMetereologicoSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      fecha_hora: this.fecha_hora,
      lluvia: this.lluvia,
      viento: this.viento,
      humedad: this.humedad,
      temperatura: this.temperatura,
      num_estacion: this.num_estacion,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('DatoMetereologico', datoMetereologicoSchema)

export const schema = model.schema
export default model
