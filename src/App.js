import './App.css';
import React, { useState } from 'react';
import Welcome from './Components/Welcome';
import './Stylesheets/greetingScreen.css';
import Interface from './Components/Interface';
import './Stylesheets/Generator.css'
export default function App() {
  const [greet, setGreet] = useState(true);
  const [interfacing, setInterfacing] = useState(true);
  return (
    <div className="App">
      {interfacing && <Interface />}
    </div>
  );
}