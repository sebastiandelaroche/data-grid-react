
/**
 * Modulo que contiene los componentes para los filtros
 * de la cabecera en el componente principal Grid.
 *
 * @author sebastian.delaroche
 * @copyright Copyright (c) Aspa/Sae
 */

import React from 'react';
import Store from '../store/store.js';

/**
 * Componente que trata los filtros tipo text
 *
 * @author ...
 * @since ...
 */
export default class FilterHeader extends React.Component{

  constructor(props) {

    super(props);
    this.state = { show: false };

    this.controlShowHideFilter = this.controlShowHideFilter.bind(this);
    this.getComponentFilter = this.getComponentFilter.bind(this);

  }

  componentWillMount() {
    Store.on('ControlShowFilterColumns', this.controlShowHideFilter);
  }

  componentWillUnmount() {
    Store.removeListener('ControlShowFilterColumns', this.controlShowHideFilter);     
  }

  controlShowHideFilter(stateShow) {
    this.setState({show: stateShow});
  }

  textOnClick(e) { e.stopPropagation(); }

  filterText(e) { this.props.filterByColumn(e.target.value, this.props.columnName) }

  getComponentFilter(type) {

    let filter;
    const {typeFilter} = this.props;

    switch (typeFilter) {
      case "text":
        filter = (
          <input type='text' 
            onChange={this.filterText.bind(this)} 
            onClick={this.textOnClick.bind(this)} />
        );
      break;
      case "select":

        const {dataFilter, columnName, displayName} = this.props;

        let options = dataFilter[columnName].map((element, index) => {
          return <option 
            key={`select_filter_${displayName}_${index}`} 
            value={element}>
              {element}
          </option>;
        })

        filter = (
          <select onChange={this.filterText.bind(this)}
              onClick={this.textOnClick.bind(this)}>
            <option value="">--No filter--</option>
            {options}
          </select>
        );

      break;
      case "date":
        filter = (
          <input type='date' 
            onChange={this.filterText.bind(this)} 
            onClick={this.textOnClick.bind(this)} />
        );
      break;
      case "number":
        filter = (
          <input type='number' 
            onChange={this.filterText.bind(this)} 
            onClick={this.textOnClick.bind(this)} />
        );
      break;
    }

    return filter;
  }


	render() {

    const {show} = this.state;

    let className = {};
    className.showFilter = show ? "aspa-show ": "aspa-hide";

		return (
      <span className="">
        <span className={className.showFilter}> 
          {this.getComponentFilter()} 
        </span>
        <strong className="aspa-cort-text aspa-cursor-pointer">
          {this.props.displayName}
        </strong>
      </span>
    )
	}

}