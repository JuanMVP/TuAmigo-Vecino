import mongoose, { Schema } from 'mongoose'

const campaniaSchema = new Schema({
  nombreCampania: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

campaniaSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      nombreCampania: this.nombreCampania,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Campania', campaniaSchema)

export const schema = model.schema
export default model
