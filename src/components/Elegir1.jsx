import React, { Component } from "react";

import "./styles/cardStyle.css";

export default class Elegir1 extends Component {
  render() {
    return (
      <>
        {this.props.data.map((data) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={data.id}>
            <div className="card m-2">
              <img
                src={data.img}
                alt="Bloques"
                className="card-img-top card-img"
              />
              <div className="card-body">
                <p className="card-text">{data.info}</p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
