import React from 'react';
import Griddle from 'griddle-react';

import Configuration from './Configuration';


class Grid extends React.Component{

	render() {

		let {data, columns} = this.props;

		// Setea la informacion de las columnas
		// con su meta data, para luego obtener
		// la configuracion de la Grid
		let config = new Configuration(columns);

		return (
			<div>
				<Griddle 
					results={data}
					columnMetadata={config.getColumnMetaData}
					columns={config.getColumnName}
					showFilter={true}
 					showSettings={true}/>
			</div>
		);

	}
}

export default Grid;


