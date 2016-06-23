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
		}, {
			"columnName": "actions",
			"locked": true,
			"visible": false 
		}, {
			"columnName": "nit",
			"order": 1,
			"displayName": "Nit",
			"filter": "date"
		}, {
			"columnName": "nombre",
			"order": 2,
			"displayName": "Nombre",
			"filter": "select",
			"dataFilter": this.state.filter
		}, {
			"columnName": "email",
			"order": 3,
			"displayName": "Email",
			"filter": "text"
		}, {
			"columnName": "nombreurbanizacion",
			"order": 4,
			"displayName": "Nombre Urbanizacion",
			"filter": "number"
		}];

		return (
			<div>
				<Grid 
					data={this.state.data}
					columns={columns}/>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));