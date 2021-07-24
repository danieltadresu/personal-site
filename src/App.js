import React, { useState } from "react";
import "./App.css";
import Card from './components/UI/Card';
const App = () => {
  const [contact, setContact] = useState(false);

  return (
    <React.Fragment>
      <Card />
    </React.Fragment>    
  );
};

export default App;
