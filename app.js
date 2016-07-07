import React from 'react';
import { render } from 'react-dom';
import { ajax } from 'jquery';
import Grid from './DataGrid/Grid';
import Json from './json';


class App extends React.Component{

	constructor(props) {
		super(props);
		this.state = {data: [], filter: {}};
	}

	/**
	 * data from service rest
	 */
	componentWillMount() {
		this.setState({data: Json.data, filter: Json.filters})
	}

	render() {

		const columns = [{
			"columnName": "id",
			"locked": true,
			"visible": false
		},{
			"columnName": "idtipocliente",
			"locked": true,
			"visible": false
		}, {
			"columnName": "nit",
			"displayName": "Nit",
			"order": 1,
			"visible": true,
			"filter": true,
			"typeFilter": "text" 
		}, {
			"columnName": "nombre",
			"displayName": "Nombre",
			"order": 2,
			"visible": true,
			"filter": true,
			"typeFilter": "text"
		}, {
			"columnName": "email",
			"displayName": "Email",
			"order": 3,
			"visible": true
		}, {
			"columnName": "nombreurbanizacion",
			"displayName": "Nombre Urbanización",
			"order": 4,
			"visible": true
		}, {
			"columnName": "direccion",
			"displayName": "Dirección",
			"order": 5,
			"visible": true
		}, {
			"columnName": "movil",
			"displayName": "Movil",
			"order": 6,
			"visible": true
		}, {
			"columnName": "telefono",
			"displayName": "Teléfono",
			"order": 7,
			"visible": true
		}, {
			"columnName": "tipocliente",
			"displayName": "Tipo Cliente",
			"order": 8,
			"visible": true
		}, {
			"columnName": "zona",
			"displayName": "Zona",
			"order": 9,
			"visible": true
		}];

		return (
			<div>
				<Grid data={this.state.data} columns={columns}/>
			</div>
		);
	}
}




render(<App/>, document.getElementById('app'));