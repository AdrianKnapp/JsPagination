import React from 'react';
import './assets/styles/pages/master.scss';
import Header from './components/Header';
import Main from './components/Main';
import JsonResponse from './components/JsonResponse';

const App = () => {
  return (
    <div className="container">
      <Header />
      <section className="main-container">
        <Main />
        <JsonResponse />
      </section>
    </div>
  );
};

export default App;
