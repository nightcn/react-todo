var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				},
				{
					id: 2,
					text: 'Clean the yard'
				},
				{
					id: 3,
					text: 'Run a 6 miles'
				},
				{
					id: 4,
					text: 'Open canned tuna'
				}
			]
		};
	},
	render: function () {
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos} />
			</div>
		);
	}
});


module.exports = TodoApp;