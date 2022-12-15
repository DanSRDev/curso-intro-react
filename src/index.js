import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App/index.js';

function App(props) {
  return (
    <h1>¡{props.saludo}, {props.name}!</h1>
  );
}

function withSaludo(WrappedComponent){
  return function WrappedComponentewithSaludo(saludo) {
    return function ComponenteDeVerdad(props) {
      return (
        <>
          <WrappedComponent {...props} saludo={saludo}/>
          <p>Estamos acompañando al WrappedComponent</p>
        </>
      )
    }
  }
}

const AppWithSaludo = withSaludo(App)('Wenas');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppWithSaludo name='Juanita'/>
  // <App saludo = 'Buenas' nombre='Nath'/>
);
