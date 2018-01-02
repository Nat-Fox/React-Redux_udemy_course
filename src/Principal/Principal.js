import React, { Component } from 'react'

class Principal extends React.Component {
  constructor() {
    super()
    this.state = {
      numero: 0
    }
  }

  // *** No podemos modificar el valor del state desde otro componente ***
  aumentar() {
    this.setState({ numero: this.state.numero + 1 })
  }

  disminuir() {
    this.setState({numero: this.state.numero - 1})
  }

  render() {
    return (
      <div>
        Main Component React
        {/* Para renderizar el estado del componente principal en otro , debo pasarlo como parametro */}
        <Nombre numero={this.state.numero} />
        <AumentarNumero funcAumento={this.aumentar.bind(this)}/>
        <DisminuirNumero funcDisminu={this.disminuir.bind(this)} />        
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
        <h5>Texto desde otro componente {this.props.numero}</h5>
      </div>
    )
  }
}

class AumentarNumero extends React.Component {

  render() {
    return (
      <div>
        {/* Cuando quiero consumir desde otro componente uso props, no state. */}
        {/* Cuando quiero modificar el state de otro componente no puedo hacerlo directamente, se muta el state con una funcion 
        en el componente principal y luego se enlaza esa funcion con una del componente donde quiero renderizar esa modificacion */}
        <button onClick={this.props.funcAumento}>Aumentar</button>
      </div>
    )
  }
}

class DisminuirNumero extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.funcDisminu}>Disminuir</button>        
      </div>
    )
  }
}

export default Principal
