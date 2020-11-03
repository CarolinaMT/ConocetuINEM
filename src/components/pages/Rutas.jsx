import React, { Component } from "react";

import Card2 from "../../components/Card2";

import "../styles/bloques.css";

import data from "/data/data2.json";

export default class Rutas extends Component {
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
            <Card2 data={this.state.data} />
          </div>
        </div>
      </>
    );
  }
}