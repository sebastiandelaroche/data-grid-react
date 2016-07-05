/**
 * Grid Aspa
 */


import React from 'react';
import Griddle from 'griddle-react';


import Configuration from './Configuration';
import SettingFilterGrid from './SettingFilterGrid';


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

					tableClassName="aspa-table table-hover table-mc-indigo"

					showFilter={true}
 					showSettings={true}
 					
 					settingsText="Ajustar Columnas"
 					maxRowsText="Ajustar Cantidad De Filas"
 					
 					useGriddleStyles={false}
 					useCustomFilterComponent={true}
 					customFilterComponent={SettingFilterGrid}/>

			</div>
		);

	}
}

export default Grid;