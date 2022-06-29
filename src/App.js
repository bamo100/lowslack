import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styledComponents from "styled-components";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";


function App() {
  return (
    <div className="app">
       <Router>
         <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route exact path='/'  element={<Chat />} />
          </Routes>
        </AppBody>
      </Router> 
    </div>
  );
}

export default App;

const AppBody = styledComponents.div`
  display: flex;
  height: 100vh;
`;
