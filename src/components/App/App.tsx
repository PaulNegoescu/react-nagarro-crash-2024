import { BrowserRouter, Route, Routes } from "react-router-dom";
import { List } from "../../features/Boardgames/List";
import { Counter2 } from "../../features/Counter/Counter2";
import { Nav } from "../Nav/Nav";

export function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="counter" element={<Counter2 initialCount={6} />} />
        <Route path="boardgames" element={<List />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
