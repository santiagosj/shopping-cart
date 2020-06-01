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

/**
 * 
 *  {
            "id": 18,
            "sku": 131645984552156425,
            "title": "Producto-18",
            "description": "producto descripción",
            "availableSizes": ["L", "XL"],    
            "price": 10.9,
            "installments": 9,
            "currencyId": "USD",
            "currencyFormat": "$",
            "category":"",
            "isFreeShipping": false
         },
         {
            "id": 19,
            "sku": 9955714021001546,
            "title": "Producto-19",
            "description": "producto descripción",
            "availableSizes": ["L", "XL"],    
            "price": 10.9,
            "installments": 9,
            "currencyId": "USD",
            "currencyFormat": "$",
            "category":"",
            "isFreeShipping": false
         },
         {
            "id": 20,
            "sku": 77875410029933465,
            "title": "Producto-20",
            "description": "producto descripción",
            "availableSizes": ["L", "XL"],    
            "price": 10.9,
            "installments": 9,
            "currencyId": "USD",
            "currencyFormat": "$",
            "category":"",
            "isFreeShipping": false
         },
         {
            "id": 21,
            "sku": 45504895711300012,
            "title": "Producto-21",
            "description": "producto descripción",
            "availableSizes": ["L", "XL"],    
            "price": 10.9,
            "installments": 9,
            "currencyId": "USD",
            "currencyFormat": "$",
            "category":"",
            "isFreeShipping": false
         },
         {
            "id": 22,
            "sku":791116413513215654,
            "title": "Producto-22",
            "description": "producto descripción",
            "availableSizes": ["L", "XL"],    
            "price": 10.9,
            "installments": 9,
            "currencyId": "USD",
            "currencyFormat": "$",
            "category":"",
            "isFreeShipping": false
         },
         {
            "id": 23,
            "sku": 87534281177308263115,
            "title": "Producto-23",
            "description": "producto descripción",
            "availableSizes": ["L", "XL"],    
            "price": 10.9,
            "installments": 9,
            "currencyId": "USD",
            "currencyFormat": "$",
            "category":"",
            "isFreeShipping": false
         },
         {
            "id": 24,
            "sku": 38430301708230158226,
            "title": "Producto-24",
            "description": "producto descripción",
            "availableSizes": ["L", "XL"],    
            "price": 10.9,
            "installments": 9,
            "currencyId": "USD",
            "currencyFormat": "$",
            "category":"",
            "isFreeShipping": false
         },
         {
            "id": 25,
            "sku":88888257126461686844,
            "title": "Producto-25",
            "description": "producto descripción",
            "availableSizes": ["L", "XL"],    
            "price": 10.9,
            "installments": 9,
            "currencyId": "USD",
            "currencyFormat": "$",
            "category":"",
            "isFreeShipping": false
         },
         {
            "id": 26,
            "sku":58055676863110051341,
            "title": "Producto-26",
            "description": "producto descripción",
            "availableSizes": ["L", "XL"],    
            "price": 10.9,
            "installments": 9,
            "currencyId": "USD",
            "currencyFormat": "$",
            "category":"",
            "isFreeShipping": false
         },
         {
            "id": 27,
            "sku": 31420332774042738121,
            "title": "Producto-27",
            "description": "producto descripción",
            "availableSizes": ["L", "XL"],    
            "price": 10.9,
            "installments": 9,
            "currencyId": "USD",
            "currencyFormat": "$",
            "category":"",
            "isFreeShipping": false
         },
         {
            "id": 28,
            "sku":50752587184174181560 ,
            "title": "Producto-28",
            "description": "producto descripción",
            "availableSizes": ["L", "XL"],    
            "price": 10.9,
            "installments": 9,
            "currencyId": "USD",
            "currencyFormat": "$",
            "category":"",
            "isFreeShipping": false
         },
         {
            "id": 29,
            "sku": 48635235147115266083,
            "title": "Producto-29",
            "description": "producto descripción",
            "availableSizes": ["L", "XL"],    
            "price": 10.9,
            "installments": 9,
            "currencyId": "USD",
            "currencyFormat": "$",
            "category":"",
            "isFreeShipping": false
         },
         {
            "id": 30,
            "sku": 43571366663216711378,
            "title": "Producto-30",
            "description": "producto descripción",
            "availableSizes": ["L", "XL"],    
            "price": 10.9,
            "installments": 9,
            "currencyId": "USD",
            "currencyFormat": "$",
            "category":"",
            "isFreeShipping": false
         }
 */