import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./componets/Home/HomeScreen";
import Product from "./componets/Products/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <a href="/">Shopyfly</a>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/" element={<HomeScreen />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
