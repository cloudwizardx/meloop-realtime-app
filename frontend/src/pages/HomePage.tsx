import { LeftSideBar } from "../components/LeftSidebar"
import { Header } from "../components/Header"
import { useAuthStore } from "../stores/AuthStore"
import { Outlet, useNavigate } from "react-router-dom"
import { RightSideBar } from "../components/RightSideBar"

export const HomePage = () => {
  const navigate = useNavigate()
  const authProfile = useAuthStore.getState().authProfile ?? null
  if (!authProfile) {
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <div className="pt-16 max-w-7xl mx-auto px-4">
        <div className="flex gap-6">
          <LeftSideBar profile={authProfile}/>
          <main className="flex-1 ml-80 mr-80 mt-4">
            <Outlet/>
          </main>
          <RightSideBar/>
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none
          scrollbar-width: none
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none
        }
      `}</style>
    </div>
  )
}
