import { ChatSkeleton } from "./ChatSkeleton"

export function ChatBox({ children }) {
  if (children.length === 0) {
    return <ChatSkeleton />
  }

  return (
    <div className="min-h-28 w-full rounded-lg bg-white p-4 py-2 ring-1 ring-purple-700 ring-opacity-25">
      <div className="flex space-x-4  text-gray-700">{children}</div>
    </div>
  )
}
