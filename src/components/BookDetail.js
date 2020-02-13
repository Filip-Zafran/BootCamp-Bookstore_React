import React from "react";

function BookDetail(props) {
  const detail = props.detail;

  return (
    <div>
      <button
        onClick={props.OnModalClose}
        type="button"
        className="book-detail-btn"
      >
        {" "}
        Close image
      </button>

      <img src={detail} alt="image" className="book-detail" />
    </div>
  );
}

export default BookDetail;
