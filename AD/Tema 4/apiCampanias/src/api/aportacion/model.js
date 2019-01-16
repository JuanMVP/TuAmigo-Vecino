import mongoose, { Schema } from 'mongoose'

const aportacionSchema = new Schema({
  cantidad: {
    type: String
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  categoria: [{
    type: Schema.Types.ObjectId,
    ref: 'Categoria'
  }],
  campania: {
    type: Schema.Types.ObjectId,
    ref: 'Campania'
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

aportacionSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      cantidad: this.cantidad,
      usuario: this.usuario,
      categoria: this.categoria,
      campania: this.campania,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Aportacion', aportacionSchema)

export const schema = model.schema
export default model
