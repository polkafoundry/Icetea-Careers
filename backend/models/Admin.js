const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
  },
  crreateAt: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('admins', AdminSchema)