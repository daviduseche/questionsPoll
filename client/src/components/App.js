import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Admin from './Admin';
import Poll from './Poll';
import Results from './Results';
import QuestionsHome from './QuestionsHome';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />

          <Route path="/" exact component={QuestionsHome} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/poll" exact component={Poll} />
          <Route path="/results" exact component={Results} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
