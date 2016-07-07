
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
export default class FilterHeader extends React.Component{

  constructor(props) {
    super(props);
  }

	render() {
		return (
      <span>
        <strong className="aspa-cort-text aspa-cursor-pointer">
          {this.props.displayName}
        </strong>
      </span>
    )
	}

}