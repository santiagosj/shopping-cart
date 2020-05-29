const path = require('path')

const express = require('express')
const cors = require('cors');

const app = express() //instancia de express
app.use(cors())

const port = process.env.PORT || 8001;

app.get('/api/products',(req, res)=>{
    res.sendFile(path.join(__dirname,'data','products.json'));
})

app.listen(port,()=>{
    console.log(`[products] API listening on ${port}.`);
})