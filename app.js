import React from 'react';
import { render } from 'react-dom';
import { ajax } from 'jquery';


class App extends React.Component{

	/**
	 * data from service rest
	 */
	componentWillMount() {
		ajax({
			url: "http://localhost:9090/Aspadevs/api/productos/producto/listar",
			dataType: "json",
			headers: {
			"Authorization": "Basic " + btoa('admin' + ":" + '123')
			},
			method: 'get',
			success: (response)=> {
				console.log('response', response);
			},
			error: (error) => {
				console.log('error', error);
			}
		})
	}

	render() {
		return <div>Hola que hace :D</div>;
	}
}

render(<App/>, document.getElementById('app'));