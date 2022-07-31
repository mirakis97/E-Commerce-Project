import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./componets/Home/HomeScreen";
import Product from "./componets/Products/Product";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-App">
        <header className="App-header">
        <Navbar>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Shopyfly</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
        </header>
        <main>
        <Container>
          <Routes>
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserverd</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
