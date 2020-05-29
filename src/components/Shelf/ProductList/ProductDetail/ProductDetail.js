import React from 'react'
import { connect } from 'react-redux'

const ProductDetail = (props) => {
    const {product} = props
    window.localStorage.setItem('product',JSON.stringify(product));
    return (
        <div>
            <h1>{product && product.title}</h1>
             -------------------------------
            <div>
            { product && (
                <ul>
                    <li>Preceio: {product.price}</li>
                    <li>Descriopción: {product.description}</li>
                    <li>Disponibles: {product.availableSizes}</li>
                </ul>
            )}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {

    const id = ownProps.match.params.id;
    const products = state.shelf.products
    const product = products ? products[id - 1] : null
    
    console.log(product)
  
    return {
       product: product
    }

}

export default connect(mapStateToProps)(ProductDetail)
