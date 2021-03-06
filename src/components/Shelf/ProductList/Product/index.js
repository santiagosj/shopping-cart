import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';
import '../../style.scss'

const Product = ({product, addProduct }) => {
    product.quantity = 1;

    let formattedPrice = formatPrice(product.price, product.currencyId);

    let productInstallment;

     if(!!product.installments){
        const installmentPrice = product.price / product.installments;

        productInstallment = (
            <div className="installment">
              <span>or {product.installments} x</span>
              <b>
                {product.currencyFormat}
                {formatPrice(installmentPrice, product.currencyId)}
              </b>
            </div>
          );
     }

    return(
        <div 
           className="shelf-item"
           data-sku={product.sku}
        >
             {product.isFreeShipping && (<span className="shelf-stopper">Envío gratis</span>)}

             <Link to={`products/${product.sku}`} className={'link'}>

                <Thumb
                  classes="shelf-item__thumb"
                  src={require(`../../../../static/products/${product.sku}_1.jpg`)}
                  alt={product.title}
                />
                
                    <p className="shelf-item__title">{product.title}</p>
                
                    <div className="shelf-item__price">

                        <div className="val">
                            <small>{product.currencyFormat}</small>
                            <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
                            <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
                        </div>
                        
                        {productInstallment}

                    </div>
                </Link>

            <div className="shelf-item__buy-btn" onClick={() => addProduct(product)}>Agregar al carrito</div>

        </div>
    )

}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    addProduct:PropTypes.func.isRequired
}

export default connect(
   null,{ addProduct } 
   )(Product) 