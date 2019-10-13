import React, { Component } from "react";

class BookForm extends Component {
  initialState = {
    name: "",
    author: ""
  };
  state = this.initialState;

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault(); // necessary to prevent page reload
    const { addBook } = this.props;

    addBook(this.state);
    this.setState(this.initialState); // reset the form to default values
  };

  render() {
    const { name, author } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={this.handleChange}
        />
        <button>Add Book</button>
      </form>
    );
  }
}

export default BookForm;
