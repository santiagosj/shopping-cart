import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import { updateFilters } from '../../../services/filters/actions';
import Checkbox from '../../Checkbox';

import './style.scss';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

class Filter extends Component{

    static propTypes = {
        updateFilters: PropTypes.func.isRequired,
        filters: PropTypes.array
    };

        componentDidMount() {
          this.selectedCheckboxes = new Set();
        }

      toggleCheckbox = label => {
          if(this.selectedCheckboxes.has(label)){
              this.selectedCheckboxes.delete(label)
          }else{
              this.selectedCheckboxes.add(label)
          }
          this.props.updateFilters(Array.from(this.selectedCheckboxes))
           console.log(this.selectedCheckboxes)
      }

    
      createCheckbox = label => (
          <Checkbox
             classes="filters-available-size"
             label={label}
             handleCheckboxChange = {this.toggleCheckbox}
             key={label}
          />
          
      )

      createCheckboxes = () => availableSizes.map(this.createCheckbox)

      render(){

          return(
              <div className="filters">
                  <h4 className="title">Sizes:</h4>
                  
                  { this.createCheckboxes()}

                  <h4>Categorias</h4> 
                  ------------------- <br/>
                  <select>
                      <option>Select</option>
                      <option>Tech</option>
                      <option>Music</option>
                      <option>Beer</option>
                  </select>
              </div>
              
          )
      }
}

export default connect(
    null,
    { updateFilters }
  )(Filter);