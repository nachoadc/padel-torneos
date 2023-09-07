import { Routes, Route } from "react-router-dom";


import {
  AdminCreateTournamentPage,
  AdminHomePage,
  AdminInscriptionPage,
} from "./admin/pages";
import AdminLayout from "./admin/AdminLayout";
import Error404 from "./components/Error404";


function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>SOY LANDIN PAGE</h1>} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminHomePage  />} />
        <Route
          path="create-tournament"
          element={<AdminCreateTournamentPage />}
        />
        <Route path="inscription" element={<AdminInscriptionPage />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
