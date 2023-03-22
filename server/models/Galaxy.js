import { Schema } from "mongoose"

export const GalaxySchema = new Schema({
  name: { type: String, required: true, maxLength: 50 },
  stars: { type: Number, required: true, min: 1, max: 1000000000 }
},
  { timestamps: true, toJSON: { virtuals: true } })