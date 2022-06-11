import "./App.css";
import "./styles/normalize.css";
import AddItem from "./components/pages/AddItem";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Collection from "./components/Collection";
import Header from "./components/Header";
import Explore from "./components/pages/Explore";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/add" element={<AddItem />} />
        <Route path="/" element={<Collection />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
