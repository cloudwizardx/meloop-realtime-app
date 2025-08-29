import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { ProtectedRoute } from "./routes/ProtectRoute"
import { PostPage } from "./pages/PostPage"
import { FriendPage } from "./pages/FriendPage"
import { FriendRequestPage } from "./pages/FriendRequestPage"

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      >
        <Route index element={<PostPage/>}/>
        <Route path='friends' element={<FriendPage/>}>
          <Route path='invitation' element={<FriendRequestPage/>}/>
          <Route path='suggestion'/>
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
