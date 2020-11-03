import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/cardStyle.css";

export default class Card extends Component {
  render() {
    return (
      <>
        {this.props.data.map((element) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={element.id}>
            <div className="card m-2">
            <Link to="/Elegir" className="nav-link">
              <img
                className="card-img-top card-img"
                src={element.img}               
                alt="Bloques"               
              />
               </Link>
              <div className="card-body">
                <p className="card-text">{element.info}</p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
