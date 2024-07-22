var express = require('express');
var router = express.Router();
var mysql_conn = require('../mysql_conn');

/* Get ticket listing. */
router.get('/getAll', function(req, res, next) {
  mysql_conn.query("select * from tickets",(err,data)=>{
    res.json(data);
  })
});

/* Add ticket */
router.post('/add', function(req, res, next) {
  let query = `insert into tickets set title='${req.body.title}', description='${req.body.description}', status='${req.body.status}'`;
  mysql_conn.query(query,(err,data)=>{
    res.json(data?data:err);
  })
});

/* Add ticket */
router.delete('/delete/:id', function(req, res, next) {
  let query = `delete from tickets where id=${req.params.id}`;
  mysql_conn.query(query,(err,data)=>{
    res.json(data?data:err);
  })
});

module.exports = router;
