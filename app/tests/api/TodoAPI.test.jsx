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
});