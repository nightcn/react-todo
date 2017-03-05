var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
	handleOnClick: function () {
		this.props.onToggle(this.props.id);
	},
	render: function () {
		var {id, text, completed, createdAt, completedAt} = this.props;
		var renderDate = () => {
			var message = completed ? 'Completed ' : 'Created ';
			var timestamp = completed ? completedAt : createdAt;

			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
		}

		return (
			<div onClick={this.handleOnClick}>
				<input type="checkbox" checked={completed} />
				<p>{text}</p>
				<p>{renderDate()}</p>
			</div>
		);
	}
});

module.exports = Todo;