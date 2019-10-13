import React, { Component } from "react";
import ReferenceTable from "./ReferenceTable";
import BookForm from "./BookForm";
import "./assets/primitive.css";

class App extends Component {
  initialState = {
    // initial state is useful for resetting data
    bookData: [
      { name: "Harry Potter", author: "J.K. Rowling" },
      { name: "Game of Thrones", author: "George R. R. Margin" }
    ]
  };
  state = this.initialState;

  deleteBook = name => {
    const { bookData } = this.state;

    this.setState({ bookData: bookData.filter(book => book.name !== name) });
  };

  addBook = book => {
    const { bookData } = this.state;

    this.setState({ bookData: [book, ...bookData] });
  };

  render() {
    const { bookData } = this.state;

    return (
      <div className="small-container">
        <h1>Library</h1>

        <BookForm addBook={this.addBook} />
        <ReferenceTable data={bookData} deleteBook={this.deleteBook} />
      </div>
    );
  }
}

export default App;
