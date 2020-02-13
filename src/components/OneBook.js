import React from "react";
import BookDetail from "./BookDetail";

class OneBook extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalOpened: false
    };
  }

  render() {
    const book = this.props.book;
    return (
      <div id="FlipCard" className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img class="BookImage" src={book.cover} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <p>{book.language}</p>
            <button
              onClick={() => {
                this.setState({ isModalOpened: true });
              }}
              type="button"
            >
              More info
            </button>
          </div>
        </div>
        {this.state.isModalOpened && (
          <BookDetail
            detail={book.detail}
            OnModalClose={() => {
              this.setState({ isModalOpened: false });
            }}
          />
        )}
      </div>
    );
  }
}

export default OneBook;
