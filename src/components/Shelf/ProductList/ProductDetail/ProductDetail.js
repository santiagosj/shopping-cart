import React from 'react'
import { connect } from 'react-redux'
import Thumb from '../../../Thumb/index'
import { addProduct } from '../../../../services/cart/actions';
import './ProductDetail.scss'

const ProductDetail = (props) => {
    const {product, addProduct } = props
    //window.localStorage.setItem('product',JSON.stringify(product));
    return (
        <div className='product-detail-container'>
            <h1>{product && product.title}</h1>
            
            <section className="detail-section">
                <div className='box-1'>
                    { product && <Thumb
                        classes="shelf-item__thumb"
                        src={require(`../../../../static/products/${product.sku}_1.jpg`)}
                        alt={product.title}
                />}

                </div>
                <div className='box-2'>
                { product && (

                    <ul>
                        -----------------------------------------------
                        <li>Descriopción: {product.description}</li>
                        -----------------------------------------------
                        <li>Disponibles: {product.availableSizes.join(', ')}</li>
                        -----------------------------------------------
                        <li>Preceio: $ {product.price}</li>
                        -----------------------------------------------
                        <div className="shelf-item__buy-btn" onClick={() => addProduct(product)}>Agregar al carrito</div>
                    </ul>
                    
                )}
                </div>

            </section>
            
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {

    const sku = ownProps.match.params.sku;
    const products = state.shelf.products
    const product = products ? products.find(product => product.sku == sku) : null
    //console.log(sku, product, products.length)
    return {
       product: product
    }

}

export default connect(mapStateToProps,{ addProduct } )(ProductDetail)
