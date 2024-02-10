// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import './App.css'; // Importando os estilos CSS

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Lista de Contatos</h1>
        <AddContact />
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
