import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Favorite from "./components/Favorites";

function App() {
  return (
    <div className="character">
      <div className="container">
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="favorites" element={<Favorite />} />
          </Routes>
        </Layout>
      </div>
    </div>
  );
}

export default App;
