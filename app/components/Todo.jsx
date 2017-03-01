var React = require('react');

var Todo = React.createClass({
	handleOnClick: function () {
		this.props.onToggle(this.props.id);
	},
	render: function () {
		var {id, text, completed} = this.props;

		return (
			<div onClick={this.handleOnClick}>
				<input type="checkbox" checked={completed} />
				{text}
			</div>
		);
	}
});

module.exports = Todo;