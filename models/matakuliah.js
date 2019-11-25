const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matakuliahSchema = new Schema({
  kodemk : {
    type: String
  },
  matkul : {
    type: String
  },
  sks : {
      type: Number
  },
  kelas : {
      type: String
  },
  namadosen : {
      type: String
  }
})

module.exports = mongoose.model('matakuliah',matakuliahSchema)