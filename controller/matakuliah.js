const matakuliah = require('../models/Matakuliah')

exports.insertmatakuliah = (data) =>
new Promise((resolve, reject)  => {
   matakuliah.create(data)
    .then(res => {
      resolve({
        error :false,
        pesan: 'Berhasil Input Data'
      })  
    })
    .catch(()=>{
      reject({
        error:true,
        pesan:'Gagal Input Data'
      })
    })
})