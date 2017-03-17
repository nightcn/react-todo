var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');


var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New state', store.getState());
});



$(document).foundation();

//App styles
require('applicationStyles'); //app.scss --{ApplicationStyles}

ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.getElementById('app')
);