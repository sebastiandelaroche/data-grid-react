
/**
 * Modulo que contiene los componentes para los filtros
 * de la cabecera en el componente principal Grid.
 *
 * @author sebastian.delaroche
 * @copyright Copyright (c) Aspa/Sae
 */

import React from 'react';
import Store from './store/store.js';

/**
 * Componente que trata los filtros tipo text
 *
 * @author ...
 * @since ...
 */
export class ComponentText extends React.Component {

  constructor(props) {
    super(props);
    this.state = { show: false };
    this.controlShowHideFilter = this.controlShowHideFilter.bind(this);
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


  textOnClick(e) {
    e.stopPropagation();
  } 

  filterText(e) {
    this.props.filterByColumn(e.target.value, this.props.columnName)
  }



	render() {

    const {show} = this.state;
    const {filter} = this.props;
    let className = {};

    className.showFilter = show ? "aspa-show": "aspa-hide";
    const componentFilter = this.getComponentFilterHeader(filter);

		return (
      <div>
        <div>
          <strong>
            {this.props.displayName}
          </strong>
        </div>
        <div className={className.showFilter}>

          <componentFilter />


          <input type='text' onChange={this.filterText.bind(this)}
            onClick={this.textOnClick.bind(this)} />



        </div>
      </div>
    )
	}

}


/**
 * Componente que trata los filtros tipo date
 *
 * @author ...
 * @since ...
 */
export class ComponentDate extends React.Component {

  textOnClick(e) {
    e.stopPropagation();
  } 

  filterText(e) {
    this.props.filterByColumn(e.target.value, this.props.columnName)
  }

	render() {

    let style = {};
    style.display = this.props.visible ? "aspa-show": "aspa-hide";

		return (
      <span>
        <div>
          <strong>
            {this.props.displayName}
          </strong>
        </div>
        <input type='date' style={style}
          onChange={this.filterText.bind(this)} 
          onClick={this.textOnClick.bind(this)} />
      </span>
    )
	}

}

/**
 * Componente que trata los filtros tipo select
 *
 * @author ...
 * @since ...
 */
export class ComponentSelect extends React.Component {

  textOnClick(e) {
    e.stopPropagation();
  } 

  filterText(e) {
    this.props.filterByColumn(e.target.value, this.props.columnName)
  }

	render() {

    let options = this.props.dataFilter[this.props.columnName].map((data)=> {
      return <option key={`column_${this.props.displayName}_${data}`} value={data}>{data}</option>
    })

    let style = {};
    style.display = this.props.visible ? "aspa-show": "aspa-hide";

		return (
      <span>
        <div>
          <strong>
            {this.props.displayName}
          </strong>
        </div>
				<select onChange={this.filterText.bind(this)} style={style}
            onClick={this.textOnClick.bind(this)}>
			    <option value="">--No filter--</option>
      	  {options}
				</select>
      </span>
    )
	}

}

/**
 * Componente que trata los filtros tipo number
 *
 * @author ...
 * @since ...
 */
export class ComponentNumber extends React.Component{

  textOnClick(e) {
    e.stopPropagation();
  } 

  filterText(e) {
    this.props.filterByColumn(e.target.value, this.props.columnName)
  }

	render() {

    let style = {};
    style.display = this.props.visible ? "aspa-show": "aspa-hide";

		return (
      <span>
        <div>
          <strong>
            {this.props.displayName}
          </strong>
        </div>
        <input style={style} type='number' onChange={this.filterText.bind(this)} onClick={this.textOnClick.bind(this)} />
      </span>
    )
	}

}

