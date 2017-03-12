var React = require('react');
var ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');


var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Yeah baby'));
store.dispatch(actions.setSearchText('baby'));
store.dispatch(actions.toggleShowCompleted());

$(document).foundation();

//App styles
require('applicationStyles'); //app.scss --{ApplicationStyles}

ReactDOM.render(
	<TodoApp />,
	document.getElementById('app')
);