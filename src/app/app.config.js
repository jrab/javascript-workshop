
/*
- CommentBox
  - CommentList
    - Comment
  - CommentForm
*/

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];


var ComentBox = React.createClass({

	render: function () {

		return (
			<div className="commentBox">

				<h3>Comments</h3>
				
				<CommentList data={this.props.data} />

				<CommentForm />
			</div>
			);
	}
});

var CommentList = React.createClass({

	render: function () {

		var commentNodes = this.props.data.map(function (comment) {

			return (
				<Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
				);

		});

		return (
			<div className="commentList">
				{commentNodes}
			</div>
			);
	}
});

var Comment = React.createClass({

	rawMarkup: function() {
		var md = new Remarkable();
		var rawMarkup = md.render(this.props.children.toString());
		return { __html: rawMarkup };
	},

	render: function () {

		return (
			<div className="comment">
				<h4 className="author">{this.props.author}</h4>
				<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
			);
	}
});

var CommentForm = React.createClass({

	render: function () {

		return (
			<div className="commentForm">
				Hello World! This is a comment form!
			</div>
			);
	}
});

ReactDOM.render(<ComentBox data={data} />, document.getElementById('example'));