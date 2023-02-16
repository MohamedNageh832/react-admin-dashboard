import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Auth/auth";
import RequireAuth from "./Auth/requireAuth";
import LoginPage from "./Pages/login/Login";
import NotFound from "./Pages/404page/NotFound";
import DataEntryPages from "./routes/data-entry";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={<RequireAuth allowedRoles={["dataEntry", "admin"]} />}
          >
            <Route path="/staff/data-entry/*" element={<DataEntryPages />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
