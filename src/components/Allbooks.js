import React from "react";
import OneBook from "./OneBook";

class AllBooks extends React.Component {
  // HOOK componentWillMount
  componentWillMount() {
    this.state = {
      books: []
    };

    fetch("https://api.myjson.com/bins/zyv02")
      .then(response => response.json())
      .then(data => {
        this.setState({ books: data.books });
      })
      .catch(error => console.log(error));
  }

  render() {
    const books = this.state.books;
    return (
      <div className="card-container">
        {books.map(book => (
          <OneBook book={book} />
        ))}
      </div>
    );
  }
}

export default AllBooks;
