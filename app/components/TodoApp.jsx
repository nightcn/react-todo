var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'Walk the dog',
					completed: false
				},
				{
					id: uuid(),
					text: 'Clean the yard',
					completed: true
				},
				{
					id: uuid(),
					text: 'Run a 6 miles',
					completed: false
				},
				{
					id: uuid(),
					text: 'Open canned tuna',
					completed: true
				}
			]
		};
	},
	handleToggle: function (id) {
		//alert(id);
		var updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}

			return todo;
		});

		this.setState({todos: updatedTodos});

	},
	handleAddTodo: function (text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false
				}
			]
		});

		
		//this.setState((prevState) => {
		//	todos: prevState.todos.push({
		//		id: prevState.todos.length + 1,
		//		text: text
		//	});
		//});
	},
	handleSearch: function (showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},
	render: function () {
		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={todos} onToggle={this.handleToggle} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
});


module.exports = TodoApp;