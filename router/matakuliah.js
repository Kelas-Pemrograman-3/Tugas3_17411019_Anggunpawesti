const matakuliah = require ('express')()
const matakuliahcontroller =require('../Controller/matakuliah')

matakuliah.post('/insert',(req,res) =>{
    matakuliahcontroller.insertmatakuliah(req.body)
    .then(result=>{
      res.json(result)
    }).catch(err =>{
      res.json(err)
    })
})

module.exports=matakuliah