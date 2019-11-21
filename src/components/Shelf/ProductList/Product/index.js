import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Thumb from '../../../Thumb';
import { addProduct } from '../../../../services/cart/actions';

const Product = ({product, addProduct}) => {
   
    return(
        <div 
           className="shelf-item"
           onClick={()=>addProduct(product)}
           data-sku={product.sku}
        >
             {product.isFreeShipping && (<span className="shelf-stopper">Envío gratis</span>)}
             <Thumb
               classes="shelf-item__thumb"
               src={require(`../../../../static/products/${product.sku}_1.jpg`)}
             />
            <div className="shelf-item__buy-btn">Agregar al carrito</div>
        </div>
    )

}
//define el tipo de propiedad del componente producto un objeto "product" y una funcion "addProdcut"
Product.propTypes = {
    product: PropTypes.object.isRequired,
    addProduct:PropTypes.func.isRequired
}

export default connect(null,{addProduct})(Product)