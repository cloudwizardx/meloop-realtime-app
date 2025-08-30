import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { ProtectedRoute } from "./routes/ProtectRoute";
import { PostPage } from "./pages/PostPage";
import { FriendPage } from "./pages/friends/FriendPage";
import { FriendRequestPage } from "./pages/friends/FriendRequestPage";
import { FriendSuggestionPage } from "./pages/friends/FriendSuggestionPage";
import { MessagePage } from "./pages/messages/MessagePage";

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
    //     <Route index element={<PostPage />} />
    //     <Route path="friends" element={<FriendPage />} />
    //   </Route>
    //   <Route path="/login" element={<LoginPage />} />
    //   <Route element={<ProtectedRoute/>}>
    //     <Route path="/friends/invitation" element={<FriendRequestPage />} />
    //     <Route path="/friends/suggestion" element={<FriendSuggestionPage />} />
    //   </Route>
    // </Routes>
    <MessagePage/>
  );
}

export default App;
