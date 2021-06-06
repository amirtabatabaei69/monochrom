import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import MyWork from "./Pages/MyWork";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/myWork" exact component={MyWork} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/blog" exact component={Blog} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
