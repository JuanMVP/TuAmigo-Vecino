import mongoose, { Schema } from 'mongoose'

const publicacionSchema = new Schema({
  usuario: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  titulo: {
    type: String
  },
  contenido: {
    type: String
  },
  fecha: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

publicacionSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      usuario: this.usuario.view(full),
      titulo: this.titulo,
      contenido: this.contenido,
      fecha: this.fecha,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Publicacion', publicacionSchema)

export const schema = model.schema
export default model
