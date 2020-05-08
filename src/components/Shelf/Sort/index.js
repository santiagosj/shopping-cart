import React from 'react'
import PropTypes from 'prop-types';

import {connect} from 'react-redux'
import {updateSort} from '../../../services/sort/actions'
import Selectbox from '../../SelectBox';

const sortBy = [
    { value: '', label: 'Select' },
    { value: 'lowestprice', label: 'Bajo a alto' },
    { value: 'highestprice', label: 'Alto a bajo' }
]

const Sort = ({updateSort, sort}) => (
    <div className="sort">
        Ordenar por precio
       <Selectbox options={sortBy} handleOnChange={value => updateSort(value)}/>
    </div>
)

Sort.propTypes = {
    updateSort:PropTypes.func.isRequired,
    sort: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    sort:state.sort.type
})

export default connect(
    mapStateToProps,
    {updateSort}
)(Sort)