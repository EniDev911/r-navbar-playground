import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from "./context/AppCtx";
import Navbar from "./components/Navbar";
import Home from "./views/Home";

export default function App() {
  return (
    <AppProvider>
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
    </AppProvider>
  );
}
