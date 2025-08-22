import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { ProtectedRoute } from "./routes/ProtectRoute";
import { PostPage } from "./pages/PostPage";
import { FriendPage } from "./pages/FriendPage";

function App() {
  return (
    // <Routes>
    //   <Route
    //     path="/"
    //     element={
    //       <ProtectedRoute>
    //         <HomePage />
    //       </ProtectedRoute>
    //     }
    //   >
    //     <Route path='posts' index element={<PostPage/>}/>
    //     <Route path='friends' element={<FriendPage/>}/>
    //   </Route>
    //   <Route path="/login" element={<LoginPage />} />
    // </Routes>
    <FriendPage/>
  );
}

export default App
