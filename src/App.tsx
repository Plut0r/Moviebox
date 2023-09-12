import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MovieDetails from "./pages/movieDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
