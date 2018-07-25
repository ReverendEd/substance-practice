 const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
//require all ur schemas
router.get('/', (req, res)=>{
    console.log('koala.router.js is working');
    res.send(/*something*/)
});
router.post('/', (req, res)=>{
    //whatever the post does
    res.sendStatus(201);
})



//for postgres / pg //this goes in the routers
const pg = require('pg');

const Pool = pg.Pool; //how to connect and make queries
const pool = new Pool({
  host: 'localhost', //where is database
  port: '5432',
  database: 'petStore',
  max: 10, //how many connections or queries at one time
  idleTimeoutMillis: 30000 //30 second to try to connect before canceling the query
});

pool.on('connect', ()=>{
  console.log('pg has connected to PostGreSQL');
});

pool.on('error', (error)=>{
  console.log(error);
});
//end postgres stuff

module.exports = router;