import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./componets/Home/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <a href="/">Shopyfly</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
