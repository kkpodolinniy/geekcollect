import "./App.css";
import "./styles/normalize.css";
import AddItem from "./components/pages/AddItem";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Collection from "./components/Collection";

function App() {
  return (
    <Routes>
      <Route path="/add" element={<AddItem />} />
      <Route path="/" element={<Collection />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
