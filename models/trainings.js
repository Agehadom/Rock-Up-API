const mongoose = require('mongoose')

const trainingSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
      required: true
    },
    code: {
      type: String,
      unique: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Training', trainingSchema)
