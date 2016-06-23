
/**
 * Modulo encargado de controlador los componentes 
 * para los filtros de las columnas y ajustes generales 
 * de la Grid.
 *
 * @author sebastian.delaroche
 * @copyright Copyright (c) Aspa/Sae
 */

import React from 'react';

class SettingFilterGrid extends React.Component{

	constructor(props) {
		super(props);
		this.filter = this.filter.bind(this);
	}

  filter(event) {
    this.props.changeFilter(event.target.value);
  }

	render() {
		return (
			<div>
				<input type="text" 
					onChange={this.filter}
					placeholder="filtrar"/>
			</div>
		);
	}

}

export default SettingFilterGrid;
