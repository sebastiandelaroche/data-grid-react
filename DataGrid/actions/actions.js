import Dispatcher from '../dispatcher/dispatcher.js';

export function ControlShowFilterColumns(show) {
	Dispatcher.dispatch({
		type: 'SHOW_AND_HIDE_FILTER_COLUMNS',
		show
	})
}