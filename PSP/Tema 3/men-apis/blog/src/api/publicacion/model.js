import mongoose, { Schema } from 'mongoose'

const publicacionSchema = new Schema({
  titulo: {
    type: String
  },
  autor: {
    type: Schema.Types.ObjectId,
    ref: 'Persona'
  },
  opiniones: [{
    type: Schema.Types.ObjectId,
    ref: 'Opinion'
  }]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

publicacionSchema.methods = {
  view (full) {
    const fullView = {
      // simple view
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      opiniones: this.opiniones,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    const shortView ={
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
    }

    return fullView ? {
      ...view
      // add properties for a full view
    } : shortView
  }
}

const model = mongoose.model('Publicacion', publicacionSchema)

export const schema = model.schema
export default model
