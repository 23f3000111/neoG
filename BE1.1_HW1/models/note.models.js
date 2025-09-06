const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  content: String,
  category: { type: String, enum: ['Personal', 'Work', 'Study', 'Ideas', 'Journal', 'Other'] },
  tags: [String]
}, { timestamps: true })

module.exports = mongoose.model('Note', noteSchema)
