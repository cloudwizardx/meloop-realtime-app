import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { useAuthStore } from "./stores/AuthStore";
import { ProtectedRoute } from "./routes/ProtectRoute";

function App() {
  const isAuthenticated = useAuthStore.getState().isAuthenticated;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
