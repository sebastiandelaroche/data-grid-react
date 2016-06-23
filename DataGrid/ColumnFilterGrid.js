
/**
 * Modulo que contiene los componentes para los filtros
 * de la cabecera en el componente principal Grid.
 *
 * @author sebastian.delaroche
 * @copyright Copyright (c) Aspa/Sae
 */

import React from 'react';


/**
 * Componente que trata los filtros tipo text
 *
 * @author ...
 * @since ...
 */
export class ComponentText extends React.Component{

  textOnClick(e) {
    e.stopPropagation();
  } 

  filterText(e) {
    this.props.filterByColumn(e.target.value, this.props.columnName)
  }

	render() {

    let style = {};
    style.display = this.props.visible ? "block": "none";

		return (
      <span>
        <div>
          <strong>
            {this.props.displayName}
          </strong>
        </div>
        <input type='text' style={style}
          onChange={this.filterText.bind(this)}
          onClick={this.textOnClick.bind(this)} />
      </span>
    )
	}

}


/**
 * Componente que trata los filtros tipo date
 *
 * @author ...
 * @since ...
 */
export class ComponentDate extends React.Component{

  textOnClick(e) {
    e.stopPropagation();
  } 

  filterText(e) {
    this.props.filterByColumn(e.target.value, this.props.columnName)
  }

	render() {

    let style = {};
    style.display = this.props.visible ? "block": "none";

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
export class ComponentSelect extends React.Component{

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
    style.display = this.props.visible ? "block": "none";

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
    style.display = this.props.visible ? "block": "none";

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

