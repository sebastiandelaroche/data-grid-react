/**
 * Grid Aspa
 */


import React from 'react';
import Griddle from 'griddle-react';


import Configuration from './Configuration';
import * as SettingGrid from './components/SettingGrid';


class Grid extends React.Component{

	render() {

		let {data, columns} = this.props;
		
		SettingGrid.setColumns(columns);

		// Setea la informacion de las columnas
		// con su meta data, para luego obtener
		// la configuración de la Grid
		let config = new Configuration(columns);

		return (
				<Griddle 
					results={data}
					
					columnMetadata={config.getColumnMetaData}
					columns={config.getColumnName}

					tableClassName="aspa-table table-hover table-mc-indigo"

					sortAscendingComponent={<i className="material-icons md-18 aspa-sort">sort_by_alpha</i>}
					sortDescendingComponent={<i className="material-icons md-18 md-dark md-inactive aspa-sort">sort_by_alpha</i>}

					showFilter={true}
 					showSettings={true}
 					useGriddleStyles={false}
 					useCustomFilterComponent={true}
 					
 					settingsText="Ajustar Columnas"
 					maxRowsText="Ajustar Cantidad De Filas"
 					
 					customFilterComponent={SettingGrid.ComponentSettingGrid}/>
		);

	}
}

export default Grid;