var expect = require('expect');


var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	});

	it('should exist', () => {
		expect(TodoAPI).toExist();
	});

	describe('setTodos', () => {
		it('should set valid todos array', () => {
			var validTodosArray = [
				{
					id: 1,
					text: 'Eat something',
					completed: false

				}
			];
			TodoAPI.setTodos(validTodosArray);

			var actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).toEqual(validTodosArray);
		});

		it('should return undefined on not array data', () => {
			var inValidData = 'cd .. ; ls ';
			TodoAPI.setTodos(inValidData);

			expect(localStorage.getItem('todos')).toBe(null);
		});
	});

	describe('getTodos', () => {
		it('should return empty array for bad localStorage data', () => {
			var actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual([]);
		});

		it('should return todos if valid Array in localStorage', () => {
			var validTodosArray = [
				{
					id: 1,
					text: 'Eat something',
					completed: false

				}
			];

			localStorage.setItem('todos', JSON.stringify(validTodosArray));
			expect(TodoAPI.getTodos()).toEqual(validTodosArray);
		});
	});

	describe('filterTodos', () => {
		var todos = [{
			id: 1,
			text: 'Some text here',
			completed: true
		},{
			id: 2,
			text: 'Other text here',
			completed: false
		},{
			id: 3,
			text: 'Some more text here',
			completed: true
		}];

		it('should return all todos if showCompleted is true', () => {
			var showCompleted = true;
			var filterTodos = TodoAPI.filterTodos(todos, showCompleted, '');

			expect(filterTodos.length).toEqual(3);
		});

		it('shoud return the items that have\'nt been completed if showCompleted is false', () => {
			var showCompleted = false;
			var filterTodos = TodoAPI.filterTodos(todos, showCompleted, '');

			expect(filterTodos.length).toEqual(1);
		});

		it('should sort by completed status', () => {
			var showCompleted = true
			var filterTodos = TodoAPI.filterTodos(todos, showCompleted, '');

			expect(filterTodos[0].completed).toEqual(false);
		});

		it('should filter todos by search text', () => {
			var showCompleted = true;
			var filterTodos = TodoAPI.filterTodos(todos, showCompleted, 'some');

			expect(filterTodos.length).toEqual(2);
		});

		it('should return all todos if searchText is empty', () => {
			var showCompleted = true;
			var filterTodos = TodoAPI.filterTodos(todos, showCompleted, '');

			expect(filterTodos.length).toEqual(3);
		});

	});
});