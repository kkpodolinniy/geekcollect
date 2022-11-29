import "./App.css";
import "./styles/normalize.css";
import AddItem from "./pages/AddItem";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Collection from "./pages/Collection/index";
import Explore from "./pages/Explore";
import MainLayout from "./layouts/MainLayout";
import ChangeItem from "./pages/ChangeItem/ChangeItem";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Collection />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/item/change/:id" element={<ChangeItem />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
