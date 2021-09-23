/* src/App.js */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./homeScreen";
import EditScreen from "./editScreen";
import { Container, Navbar, Row, Nav } from "react-bootstrap";
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
            <Navbar.Brand href="/">
              <i className="fa fa-book"></i>
              ハセガワカンタの読書記録
              <i className="fa fa-book"></i>
            </Navbar.Brand>
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/edit">管理者用リンク</Nav.Link>
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
                  <Route path="/edit" element={<EditScreen />}></Route>
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
