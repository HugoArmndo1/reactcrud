// create.component.js

import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

  constructor(props) {
	super(props);
    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeeLastName = this.onChangeEmployeeLastName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeSalary = this.onChangeSalary.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      birthdate:'',
      salary:'',
      userName:'',
      password:''
    }
  }
  onChangeEmployeeName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  onChangeEmployeeLastName(e) {
    this.setState({
      lastName: e.target.value
    })  
  }
  onChangeDate(e) {
    this.setState({
      birthdate: e.target.value
    })
  }
  onChangeSalary(e) {
    this.setState({
      salary: e.target.value
    })
  }
  onChangeUserName(e){
      this.setState({
          userName: e.target.value
      })
  }
  onChangePassword(e){
      this.setState({
          password: e.target.value
      })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      birthdate: this.state.birthdate,
      salary: this.state.salary,
      userName: this.state.userName,
      password: this.state.password
    };

    axios.get('http://localhost:8090/create', {params: obj})
        .then(res => console.log(res.data));
    
    this.setState({
      firstName: '',
      lastName: '',
      birthdate: '',
      salary: '',
      userName:'',
      password: ''
    })
  }	
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Agregar Nuevo Empleado</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nombre del Empleado:  </label>
                        <input 
                        	type="text" 
                        	className="form-control"
                        	value={this.state.firstName}
                        	onChange={this.onChangeEmployeeName}
                        	/>
                    </div>
                    <div className="form-group">
                        <label>Apellido del Empleado: </label>
                        <input 
                        	type="text" 
                        	className="form-control"
                        	value={this.state.lastName}
                        	onChange={this.onChangeEmployeeLastName}
                        	/>
                    </div>
                    <div className="form-group">
                        <label>Fecha de Nacimiento: </label>
                        <input 
                        	type="date" 
                        	className="form-control"
                        	value={this.state.birthdate}
                        	onChange={this.onChangeDate}
                        	/>
                    </div>
                    <div className="form-group">
                        <label>Salario: </label>
                        <input 
                        	type="number" 
                        	min="0.00" 
                        	max="10000.00" 
                        	step="0.01" 
                        	className="form-control"
                        	value={this.state.salary}
                        	onChange={this.onChangeSalary}
                        	/>
                    </div>
                    <div className="form-group">
                        <label>Usuario: </label>
                        <input 
                        	type="text" 
                        	className="form-control"
                        	value={this.state.userName}
                        	onChange={this.onChangeUserName}
                        	/>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input 
                        	type="password" 
                        	className="form-control"
                        	value={this.state.password}
                        	onChange={this.onChangePassword}
                        	/>
                    </div>
                    <div className="form-group">
                        <input 
                        	type="submit" 
                        	value="Registrar Empleado" 
                        	className="btn btn-primary"
                        	/>
                    </div>
                </form>
            </div>
        )
    }
}
