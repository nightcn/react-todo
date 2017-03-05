module.exports = {
	setTodos: function (todos) {
		if ($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));

			return todos;
		}
	},
	getTodos: function () {
		var stringTodos = localStorage.getItem('todos');
		var todos = [];

		try {
			todos = JSON.parse(stringTodos);
		} catch (e) {

		}

		return $.isArray(todos) ? todos : [];
	},
	filterTodos: function (todos, showCompleted, searchText) {
		var filterTodos = todos;

		// Filter by showCompleted
			filterTodos = filterTodos.filter((todo) => {
				return !todo.completed || showCompleted;
			});
		

		// Filter by searchText
			filterTodos = filterTodos.filter((todo) => {
				return todo.text.toLowerCase().includes(searchText.toLowerCase());
			}); 



		// Sort todos with non-completed first and by letter
		filterTodos
			.sort((a,b) => {
				if (a.text.toUpperCase() < b.text.toUpperCase()) {
					return -1;
				} else if (a.text.toUpperCase() > b.text.toUpperCase()) {
					return 1;
				} else {
					return 0;
				}
			})
			.sort((a, b) => {
				if (!a.completed && b.completed) {
					return -1;
				} else if (a.completed && !b.completed) { 
			 		return 1;
				} else {
					return 0;
				}
			
			});

		return filterTodos;
	}
};