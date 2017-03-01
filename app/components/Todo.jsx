var React = require('react');

var Todo = React.createClass({

	render: function () {
		var {id, text, no} = this.props;

		return (
			<div>
				{no}. {text}
			</div>
		);
	}
});

module.exports = Todo;