import { Gift, Home, UserRoundPlus, UserRoundSearch, UsersRound } from "lucide-react"

export const FriendSideBar = () => {
  return (
    <section className="flex justify-between flex-wrap gap-3 mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
      {[
        { icon: Home, label: "Home", path: "/friends" },
        { icon: UsersRound, label: "Friends", path: "/friends/me" },
        {
          icon: UserRoundPlus,
          label: "Invitation",
          path: "/friends/invitation",
        },
        {
          icon: UserRoundSearch,
          label: "Suggestion",
          path: "/friends/suggestion",
        },
        { icon: Gift, label: "Birth days" },
      ].map((item, index) => (
        <a
          key={index}
          href={item.path ?? "#"}
          className="bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 flex items-center px-4 py-2.5 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md font-medium text-sm"
        >
          <item.icon className="w-4 h-4 mr-2" />
          <span>{item.label}</span>
        </a>
      ))}
    </section>
  )
}
