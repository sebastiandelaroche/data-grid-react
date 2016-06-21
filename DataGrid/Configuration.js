/**
 * Clase encargada de manejar todas las confuraciones
 * de la Grid
 */

import HeaderGrid from './HeaderGrid';

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
			// normaliza los columns name
			this.columnsName.push(element.columnName);

			// normaliza los columns meta data
			if(typeof element.filter !== 'undefined') {
				element.customHeaderComponent = this.getComponentFilterHeader(element.filter);
			}

			this.columnsMetaData.push(element);

		})
	
	}

	/**
	 * Recibe como parametro un string
	 * que indica que tipo de component/filter
	 * retornara
	 *
	 * @param String typeFilter
	 * @return Function
	 */
	getComponentFilterHeader(typeFilter) {

		let componentFilter;

		switch (typeFilter) {
			case "text":
				componentFilter = HeaderGrid;
			break;
			case "date":
				componentFilter = HeaderGrid;
			break;
			case "select":
				componentFilter = HeaderGrid;
			break;
			case "number":
				componentFilter = HeaderGrid;
			break;
		}

		return componentFilter;
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