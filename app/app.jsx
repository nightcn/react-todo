var React = require('react');
var ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

$(document).foundation();

//App styles
require('app'); //app.scss --{ApplicationStyles}

ReactDOM.render(
	<TodoApp />,
	document.getElementById('app')
);