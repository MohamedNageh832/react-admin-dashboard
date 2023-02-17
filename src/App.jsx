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
          <Route path="/staff/data-entry/*" element={<DataEntryPages />} />
          <Route
            path="/"
            element={
              <div style={{ margin: "50px", direction: "ltr" }}>
                {" "}
                Navigate to "/staff/data-entry"
              </div>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
