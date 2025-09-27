const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a product name'],
    trim: true,
    maxlength: [100, 'Product name cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  category: {
    type: String,
    required: true,
    enum: ['vegetables', 'fruits', 'grains', 'livestock', 'dairy', 'poultry', 'fishery', 'other']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price'],
    min: [0, 'Price cannot be negative']
  },
  unit: {
    type: String,
    required: true,
    enum: ['kg', 'g', 'lb', 'ton', 'piece', 'dozen', 'crate', 'bag']
  },
  quantity: {
    type: Number,
    required: [true, 'Please add quantity'],
    min: [0, 'Quantity cannot be negative']
  },
  images: [String],
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  organic: {
    type: Boolean,
    default: false
  },
  grade: {
    type: String,
    enum: ['premium', 'standard', 'commercial', '']
  },
  harvestDate: Date,
  available: {
    type: Boolean,
    default: true
  },
  minimumOrder: {
    type: Number,
    default: 1
  },
  location: {
    city: String,
    state: String
  },
  averageRating: {
    type: Number,
    default: 0,
    min: [0, 'Rating must be at least 0'],
    max: [5, 'Rating cannot be more than 5']
  },
  reviewCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Create index for better search performance
productSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Product', productSchema);
