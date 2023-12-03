import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="...src" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Click and explore the best resource to learn {props.title}.<br />
              Go ahead the future is in your own hand. <br />
              <em>YOU ARE UNSTOPABLE..</em>
            </p>
            <NavLink to="https://www.linkedin.com/in/satyam-pandey-75396424b/" className="btn btn-primary">
              Explore Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
