/**
 * Clase encargada de manejar todas las confuraciones
 * de la Grid
 */

import FilterHeader from './components/FilterHeader';
import ComponentColumn from './components/ComponentColumn';


class Configuration {

	/**
	 * inicializa la configuracion basica
	 * para el componente
	 */
	constructor(columns) {
		this.columns = columns;
		this.columnsName = [];
		this.columnsMetaData = [];
		this.init();
	}

	/**
	 * Setea los valores para la configuracion
	 * del componente
	 */
	init() {
		
		this.columns.forEach((element) => {
			// normaliza los columnName
			if(typeof element.visible === 'undefined' || element.visible === true) {
				this.columnsName.push(element.columnName);
			}

			// setea el component por columna de la row
			element.customComponent = ComponentColumn;
			// setea el component por columna del header
			element.customHeaderComponent = FilterHeader;

			this.columnsMetaData.push(element);
		
		})
	
	}


	/**
	 * Obtiene los columns name para las
	 * componente
	 * @return array
	 */
	get getColumnName() {
		return this.columnsName;
	}

	/**
	 * Obtiene los column meta data
	 * para el componente
	 * @return array
	 */
	get getColumnMetaData() {
		return this.columnsMetaData;
	}

}

export default Configuration;