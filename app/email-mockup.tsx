import { Mail, Archive, Trash, Clock, ChevronRight, ChevronLeft, MoreVertical } from "lucide-react"

export default function EmailMockup() {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-xl">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-800 p-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-8 w-8 rounded-full bg-gray-700"></div>
            <span className="text-sm font-medium">Alicia Koch</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-gray-800 rounded">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>Inbox</span>
              </div>
              <span className="text-xs bg-gray-700 px-2 py-0.5 rounded">128</span>
            </div>

            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2">
                <Archive className="h-4 w-4" />
                <span>Drafts</span>
              </div>
              <span className="text-xs">9</span>
            </div>

            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2">
                <Trash className="h-4 w-4" />
                <span>Trash</span>
              </div>
              <span className="text-xs">23</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="border-b border-gray-800 p-4 flex justify-between items-center">
            <h2 className="font-medium">Inbox</h2>
            <div className="flex gap-2">
              <button className="p-1 rounded hover:bg-gray-800">
                <Clock className="h-4 w-4" />
              </button>
              <button className="p-1 rounded hover:bg-gray-800">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="p-1 rounded hover:bg-gray-800">
                <ChevronRight className="h-4 w-4" />
              </button>
              <button className="p-1 rounded hover:bg-gray-800">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Email List */}
          <div className="border-b border-gray-800 p-4">
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <div className="font-medium">William Smith</div>
                <div className="text-xs text-gray-400">4 months ago</div>
              </div>
              <div className="text-sm font-medium mb-1">Meeting Tomorrow</div>
              <div className="text-xs text-gray-400 line-clamp-2">
                Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and
                have some ideas I'd like to share...
              </div>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-gray-800 px-2 py-0.5 rounded">meeting</span>
                <span className="text-xs bg-gray-800 px-2 py-0.5 rounded">work</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <div className="font-medium">Alice Smith</div>
                <div className="text-xs text-gray-400">4 months ago</div>
              </div>
              <div className="text-sm font-medium mb-1">Re: Project Update</div>
              <div className="text-xs text-gray-400 line-clamp-2">
                Thanks for the project update. It looks great! We can go through the report and the timeline tomorrow...
              </div>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-gray-800 px-2 py-0.5 rounded">work</span>
                <span className="text-xs bg-gray-800 px-2 py-0.5 rounded">important</span>
              </div>
            </div>
          </div>

          {/* Email Content */}
          <div className="p-4">
            <div className="flex justify-between mb-4">
              <div>
                <div className="font-medium">William Smith</div>
                <div className="text-xs text-gray-400">Meeting Tomorrow</div>
                <div className="text-xs text-gray-400">Reply-To: williamsmith@example.com</div>
              </div>
              <div className="text-xs text-gray-400">Oct 22, 2023, 9:00:00 AM</div>
            </div>

            <div className="text-sm">
              <p className="mb-2">
                Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and
                have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's
                success.
              </p>
              <p className="mb-2">
                Please come prepared with any questions or insights you may have. Looking forward to our meeting!
              </p>
              <p>Best regards, William</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
