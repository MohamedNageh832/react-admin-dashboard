import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Auth/auth";
import RequireAuth from "./Auth/requireAuth";
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/login/Login";
import NotFound from "./Pages/404page/NotFound";
import DataEntryPages from "./Pages/data-entry/DataEntryPages";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={<RequireAuth allowedRoles={["dataEntry", "admin"]} />}
          >
            <Route path="/authtest" element={<Homepage />} />
          </Route>

          <Route path="/staff/dataEntry/*" element={<DataEntryPages />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
