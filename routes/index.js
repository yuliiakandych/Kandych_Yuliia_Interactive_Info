const express = require('express');
const router = express.Router();

const sql = require('../utils/sql')

router.get('/', (req,res)=>{
    console.log("at the main route");
   let query = "Select * from tbl_morewine";
   sql.query(query, (err,result)=>{
       console.log("getting data")
       if (err){
           throw err;
           console.log(err);
       }
       console.log("My data is beautiful"+result);
       res.render('index', {plants: result})
   })
})

router.get('/users/:id', (req,res) =>{
    console.log("popingup");
    console.log(req.params.id)
    let query = `Select * from tbl_morewine where ID=${req.params.id} `;
   sql.query(query, (err,result)=>{
       console.log("getting data")
       if (err){
           throw err;
           console.log(err);
       }
       console.log(result[0])
       res.json(result[0])
       

})
})


module.exports = router;