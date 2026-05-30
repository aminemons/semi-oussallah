import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { CoursePage } from "./components/CoursePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="course/:id" element={<CoursePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
