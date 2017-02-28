var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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
	handleAddTodo: function (text) {
		//alert(`New todo: ${text}`);
		
		this.setState((prevState) => {
			todos: prevState.todos.push({
				id: prevState.todos.length + 1,
				text: text
			});
		});
	},
	render: function () {
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
});


module.exports = TodoApp;