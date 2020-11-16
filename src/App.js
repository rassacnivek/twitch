import React from 'react';
import { Provider } from 'react-redux'
import { store } from './config/store'
import Header from './components/Header'
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
