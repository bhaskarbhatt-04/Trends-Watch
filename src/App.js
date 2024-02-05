import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import News from "./News";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    
  
    <Router>  
        <div className="header">
          <Navbar />
          <div className="container my-3">
            <h2>Trends Watch360&deg;-Top HeadLines</h2>
            <Routes>
            <Route
              exact path="/"
                element={<News pageSize={7} category="general" country="in" />}
              />
              
              <Route
              exact path="/science"
                element={<News pageSize={7} category="science" country="in" />}
              />
              <Route
              exact path="/sports"
                element={<News pageSize={7} category={"sports"} country="in" />}
              />
              <Route
              exact path="/technology"
                element={
                  <News pageSize={7} category={"technology"} country="in" />
                }
              />
              <Route
              exact path="/health"
                element={<News pageSize={7} category={"health"} country="in" />}
              />
              <Route
              exact path="/business"
                element={
                  <News pageSize={7} category={"business"} country="in" />
                }
              />
              <Route
              exact path="/general"
                element={
                  <News pageSize={7} category={"general"} country="in" />
                }
              />
              <Route
              exact path="/entertainment"
                element={
                  <News pageSize={7} category={"entertainment"} country="in" />
                }
              />
            </Routes>
          </div>
        </div>
      
    </Router>
    
  );
}

export default App;
