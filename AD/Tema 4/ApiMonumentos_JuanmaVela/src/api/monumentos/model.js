import mongoose, { Schema } from 'mongoose'

const monumentosSchema = new Schema({
  countryCode: {
    type: String
  },
  countryName: {
    type: String
  },
  cityName: {
    type: String
  },
  location: {
    type: String
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  photoUrl: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

monumentosSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      countryCode: this.countryCode,
      countryName: this.countryName,
      cityName: this.cityName,
      location: this.location,
      name: this.name,
      description: this.description,
      photoUrl: this.photoUrl,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Monumentos', monumentosSchema)

export const schema = model.schema
export default model
