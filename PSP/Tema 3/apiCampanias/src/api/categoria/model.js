import mongoose, { Schema } from 'mongoose'

const categoriaSchema = new Schema({
  nombreCategoria: {
    type: String
  },
  campania: [{
    type: Schema.Types.ObjectId,
    ref: 'Campania'
  }]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

categoriaSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      nombreCategoria: this.nombreCategoria,
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

const model = mongoose.model('Categoria', categoriaSchema)

export const schema = model.schema
export default model
