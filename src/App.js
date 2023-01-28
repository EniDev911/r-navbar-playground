import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from "./context/AppCtx";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Default from "./views/Default";

export default function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar />
          <br />
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<Default />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}
