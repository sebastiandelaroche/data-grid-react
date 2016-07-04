/**
 * Modulo encargado de controlador los componentes 
 * para los filtros de las columnas y ajustes generales 
 * de la Grid.
 *
 * @author sebastian.delaroche
 * @copyright Copyright (c) Aspa/Sae
 * 
 */

import React from 'react';
import * as Actions from './actions/actions';


class SettingFilterGrid extends React.Component{

	/**
	 * Se inicializa el componente
	 */
	constructor(props) {
		super(props);
		
		this.filter = this.filter.bind(this);
		this.controlShowHideOptions = this.controlShowHideOptions.bind(this);

		this.state = { show: false };
	}


	/**
	 * Funcion encargada de filtrar sobre 
	 * toda la grid en general
	 */
  filter(event) {
    this.props.changeFilter(event.target.value);
  }

  /**
   * controla la visualizacion de las opciones
   */
  controlShowHideOptions() {
  	const show = !this.state.show;
  	Actions.ControlShowFilterColumns(show);
  	this.setState({show: show});
  }

  /**
   * Contruye el componente
   */
	render() {

		const {show} = this.state;
		let className = {};

		className.showOptions = show ? "aspa-show" : "aspa-hide";

		return (
			<div className="aspa-header-setting">
				<input type="text" onChange={this.filter} placeholder="filtrar"/>
				<label>
					mas opciones
					<input type="checkbox" onClick={this.controlShowHideOptions} />
				</label>
				<div className={className.showOptions}>
					<button>importar desde excel</button>
					<button>descargar platilla excel</button>
					<button>enviar por correo</button>
				</div>
			</div>
		);
	}

}

export default SettingFilterGrid;
