import React from "react";
import "../../App.css";
import "../styles/contactanos.css";

export default function ContactUs() {
  return (
    <div className="App">
      
      <table>
        <tr>
          <th>
            <em><b> Nombres </b></em>{" "}
          </th>
          <th>
            <em> Apellidos</em>{" "}
          </th>
          <th>
            <em>Correo </em>
          </th>
          <th>
            <em>Celular</em>
          </th>
        </tr>
        <tr>
          <td>Valentina</td>
          <td> Restrepo Zapata</td>
          <td>vale.restrepo12320@gmail.com</td>
          <td>3004811900</td>
        </tr>

        <tr>
          <td>Sara Melina </td>
          <td>Henao Calderón</td>
          <td>samheca13@gmail.com</td>
          <td>3113061376</td>
        </tr>
        <tr>
          <td>Carolina </td>
          <td>Morales Tirado</td>
          <td>Caromora203@gmail.com</td>
          <td>3016204994 </td>
        </tr>
      </table>
    </div>
  );
}
