import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name:        { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  price:       { type: Number, required: true, min: 0 },
  imageUrl:    { type: String, default: '' },
}, {
  timestamps: true,
  versionKey: 'version',
});

export default mongoose.model('Product', productSchema);
