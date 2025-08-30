import { Header } from "../../components/Header"
import { LeftSideBarMessage } from "./LeftSideBarMessage"
import { SpecificUserConversation } from "./SpecificUserConversation"
import { UserProfileConversation } from "./UserProfileConversation"

export const MessagePage = () => {
  return (
    <div className="h-screen bg-white overflow-hidden">
      <Header />
      <main className="flex h-[calc(100vh-64px)] mt-16">

        <section className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <LeftSideBarMessage/>
        </section>

        <section className="flex-1 flex flex-col bg-white">
          <SpecificUserConversation/>
        </section>

        <section className="w-80 bg-white border-l border-gray-200">
          <UserProfileConversation/>
        </section>
      </main>
    </div>
  )
}
