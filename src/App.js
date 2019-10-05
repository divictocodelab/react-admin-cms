import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from './components/layout/Sidebar';
import Content from './components/layout/Content';

export default () => {
  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)

  return (
    <Router>
      <div className="App wrapper">
        <SideBar toggle={toggle} isOpen={isOpen} />
        <Content toggle={toggle} isOpen={isOpen} />
      </div>
    </Router>
  );
}

