import { Routes, Route } from "react-router-dom";
import { ContactPage, CreateTournamentPage, HomePage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-tournament" element={<CreateTournamentPage />} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  );
}

export default App;
