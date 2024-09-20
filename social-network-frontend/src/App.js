import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Routes>
    </Router>
  );
};

export default App;
