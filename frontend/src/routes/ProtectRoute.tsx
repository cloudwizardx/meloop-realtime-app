import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/AuthStore";
import { useEffect, useState } from "react";

type ProtectedRouteProps = {
  children?: React.ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const {
    accessToken,
    isAuthenticated: authFromStore,
    checkAuth,
  } = useAuthStore.getState();

  useEffect(() => {
    const verifyAuth = async () => {
      if (!accessToken) {
        const res = await checkAuth();
        setIsAuthenticated(res);
      } else {
        setIsAuthenticated(authFromStore);
      }
    };
    verifyAuth();
  }, [accessToken, authFromStore, checkAuth]);

  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
