import React, { Component } from 'react'

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello desde un componente de React
        <Nombre />
      </div>
    )
  }
}

class Nombre extends React.Component {
  constructor() {
    super()
    this.state = {
      nombre: 'Nat'
    }
  }

  cambiarNombre = (event) => {
    // Con event.target.value podemos obtener el valor del input
    console.log('ejecutando funcion cambiar nombre', event.target.value)
    // Le cambiarmos el state por lo que estamos ingresando en el input
    this.setState({
      nombre: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div>Hola {this.state.nombre}</div>        
        {/* Si no voy a usar arrow function debo hacer bind this.cambiarNombre.bind(this) para indicarle el contexto */}
        <input onChange={this.cambiarNombre} />
      </div>
    )
  }
}

export default Hello
