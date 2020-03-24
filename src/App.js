import React from 'react'
import { connect } from 'react-redux'
import './App.css'

export const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <input type="text"></input>
        <button>
          Update no Titulo
        </button>
        <h1>{props.titulo}</h1>
      </header>
    </div>
  )
}

const mapStateToProps = store => ({
  titulo: store.ClickReducer.titulo
})
export default connect(mapStateToProps)(App)

