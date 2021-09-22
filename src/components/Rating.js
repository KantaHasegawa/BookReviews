import React from "react";
import "./Rating.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

const Rating = (props) => {
  const { rating } = props;

  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? "fa fa-star fa-2x"
              : rating >= 0.5
              ? "fa fa-star-half-o fa-2x"
              : "fa fa-star-o fa-2x"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? "fa fa-star fa-2x"
              : rating >= 1.5
              ? "fa fa-star-half-o fa-2x"
              : "fa fa-star-o fa-2x"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? "fa fa-star fa-2x"
              : rating >= 2.5
              ? "fa fa-star-half-o fa-2x"
              : "fa fa-star-o fa-2x"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? "fa fa-star fa-2x"
              : rating >= 3.5
              ? "fa fa-star-half-o fa-2x"
              : "fa fa-star-o fa-2x"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? "fa fa-star fa-2x"
              : rating >= 4.5
              ? "fa fa-star-half-o fa-2x"
              : "fa fa-star-o fa-2x"
          }
        ></i>
      </span>
    </div>
  );
};

export default Rating;
