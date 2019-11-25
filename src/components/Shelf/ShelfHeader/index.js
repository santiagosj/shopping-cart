import React from 'react';
import PropTypes from 'prop-types';

import Sort from '../Sort';

const ShelfHeader = props => {
    return(
        <div className="shelf-container-header">
            <small className="products-found">
                <span> Se encontraron {props.productsLength} producto(s)</span>
            </small>
            <Sort/>
        </div>
    )
}

ShelfHeader.propsTypes = {
    productsLength: PropTypes.number.isRequired 
}

export default ShelfHeader;