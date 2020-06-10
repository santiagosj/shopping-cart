import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from '../../../MainContent/Main'
import ProductDetail from '../ProductDetail/ProductDetail'

const ProductRouter = () => (
  <Switch>
    <Route exact path='/products' component={Main}/>
    <Route path='/products/:sku' component={ProductDetail}/>
  </Switch>
)

export default ProductRouter
