import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProductRouter from '../Shelf/ProductList/ProductDetail/ProductRouter'

const MainContent = () => {
    return (
        <Switch>
             <Route path={'/products' } component={ProductRouter} />      
             <Redirect to="/products"/>
        </Switch>
    )
}

export default MainContent
