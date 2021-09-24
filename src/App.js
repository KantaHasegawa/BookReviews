/* src/App.js */
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomeScreen from "./homeScreen";
import NewScreen from "./newScreen";
import { Container, Navbar, Row, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css"


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
            <Navbar.Brand>
              <Link to="/" Style="text-decoration: none;">
                <span class="nav-brand">
                  <i className="fa fa-book"></i>
                  ハセガワカンタの読書記録
                  <i className="fa fa-book"></i>
                </span>
              </Link>
            </Navbar.Brand>
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Link to="/new" Style="text-decoration: none;">
                  <span class="nav-brand">管理者用リンク</span>
                </Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
        <body>
          <Container>
            <main>
              <Row>
                <Routes>
                  <Route path="/" element={<HomeScreen />}></Route>
                  <Route path="/new" element={<NewScreen />}></Route>
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
