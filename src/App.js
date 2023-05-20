import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Text from "./Components/Text";
import PageNotFound from "./Components/PageNotFound";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

function App() {
  return (
    <div className="d-flex flex-column justify-content-between align-items-between body">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/text" element={<Text />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
