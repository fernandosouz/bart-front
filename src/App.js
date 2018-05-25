import React, { Component } from 'react';
import '../node_modules/spectre.css/dist/spectre.min.css';
import './styles.css';
import FormContainer from "./containers/FormContainer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="col-lg-12 centered ">
            <h3>Solicitar Documentos</h3>
            <FormContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
