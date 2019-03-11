import React from 'react';
import { Link } from 'react-router-dom';
const QuestionsHome = () => {
  return (
    <div>
      <Link to="/admin" className="item">
        <button className="ui button blue">Add questions</button>
      </Link>
      <Link to="/poll" className="item">
        <button className="ui button orange">Answer questions</button>
      </Link>
    </div>
  );
};

export default QuestionsHome;
