var mongoose = require('mongoose');

module.exports = mongoose.model('FoodOrder', {
    name: {
        type: String,
        default: ''
    },
    price: {
      type: Number,
      default: ''
    }
});
