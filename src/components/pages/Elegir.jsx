import React, { Component } from "react";

import Elegir1 from "../../components/Elegir1";

import "../styles/bloques.css";

import data from "/data/data2.json";

export default class Elegir extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <Elegir1 data={this.state.data} />
          </div>
        </div>
      </>
    );
  }
}
