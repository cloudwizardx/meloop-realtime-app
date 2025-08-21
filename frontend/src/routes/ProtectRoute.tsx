import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
  isAuthenticated: boolean;
};

export const ProtectedRoute = ({ children, isAuthenticated }: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
