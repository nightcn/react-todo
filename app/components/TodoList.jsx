var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
	render: function () {
		var {todos} = this.props;
		
		var renderTodos = () => {
			return todos.map((todo, index) => {
				var todoNum = index + 1;
				return (
					<Todo key={todo.id} no={todoNum} {...todo} />
				);
			});
		}

		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
});

module.exports = TodoList;