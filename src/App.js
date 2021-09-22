/* src/App.js */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./homeScreen";
import { Container, Navbar, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar
          className="navbar"
          variant="dark"
          Style="background-color: #55C500; font-family: 'Kaisei HarunoUmi', serif;"
        >
          <Container>
            <Navbar.Brand href="#home">
              <i className="fa fa-book"></i>
              ハセガワカンタの読書記録
              <i className="fa fa-book"></i>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <body>
          <Container>
            <main>
              <Row>
                <Routes>
                  <Route path="/" element={<HomeScreen />}></Route>
                </Routes>
              </Row>
            </main>
          </Container>
        </body>
      </div>
    </BrowserRouter>
  );
};

export default App;
