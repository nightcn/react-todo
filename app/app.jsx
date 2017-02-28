var React = require('react');
var ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

$(document).foundation();

//App styles
require('app'); //app.scss --{ApplicationStyles}

ReactDOM.render(
	<p>Boilerplate 3 Project</p>,
	document.getElementById('app')
);