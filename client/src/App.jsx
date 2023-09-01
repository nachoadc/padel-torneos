import { Routes, Route } from "react-router-dom";

import Error404 from "./pages/Error404";
import LayoutAdmin from "./layouts/LayoutAdmin";
import {
  CreateTournamentPageAdmin,
  HomePageAdmin,
  InscriptionPageAdmin,
} from "./pages/admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>SOY LANDINPAGE</h1>} />
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route index element={<HomePageAdmin />} />
        <Route
          path="create-tournament"
          element={<CreateTournamentPageAdmin />}
        />
        <Route path="inscription" element={<InscriptionPageAdmin />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
