import React from 'react';
import { render } from 'react-dom';
import { ajax } from 'jquery';
import Grid from './DataGrid/Grid';


class App extends React.Component{

	constructor(props) {
		super(props);
		this.state = {data: []};
	}

	/**
	 * data from service rest
	 */
	componentWillMount() {
		ajax({
			url: "http://localhost:9090/Aspadevs/api/clientes/cliente/listar",
			dataType: "json",	
			headers: {
			"Authorization": "Basic " + btoa('admin' + ":" + '123')
			},
			method: 'get',
			success: (response)=> {
				console.log('response', response);
				this.setState({data: response.data})
			},
			error: (error) => {
				console.log('error', error);
			}
		})
	}

	render() {

		const columns = [{
			"columnName": "id",
			"locked": true,
			"visible": false 
		}, {
			"columnName": "nit",
			"order": 1,
			"displayName": "Nit",
			"filter": "text"
		}, {
			"columnName": "nombre",
			"order": 2,
			"displayName": "Nombre",
			"filter": "date"
		}, {
			"columnName": "email",
			"order": 3,
			"displayName": "Email",
			"filter": "select"
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