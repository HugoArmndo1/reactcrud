// TableRow.js
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.firstName}
          </td>
          <td>
            {this.props.obj.lastName}
          </td>
          <td>
            {this.props.obj.birthdate.split('T')[0]}
          </td>
          <td>
            {this.props.obj.salary}
          </td>
          <td>
            {this.props.obj.userName};          
            </td>
            <td>
            {this.props.obj.password};          
            </td>
          <td>
          <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Editar</Link>
          </td>
          <td>
            <button className="btn btn-danger">Borrar</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;
