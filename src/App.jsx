import Header from "./components/Header";
import Banner from "./components/Banner";
import Table from "./components/Table";
import Footer from "./components/Footer";
import "./styles/App.css";
import React from 'react';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Banner />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
