import "./App.css";
import "./styles/normalize.css";
import AddItem from "./components/pages/AddItem";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Collection from "./components/Collection";
import Explore from "./components/pages/Explore";
import { useContext } from "react";
import ThemeContext from "./context/context";
import MainLayout from "./layouts/MainLayout";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Collection />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
