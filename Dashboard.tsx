import { Zap, LayoutDashboard, FolderKanban, Users, Settings, Bell, DollarSign, TrendingUp, Calendar } from 'lucide-react';

function Dashboard() {
  const campaigns = [
    {
      id: 1,
      name: 'Summer Product Launch',
      progress: 75,
      status: 'AI Optimizing',
      statusColor: 'bg-teal-500',
      budget: '$5,200',
      spent: '$3,900',
      deadline: 'Jun 15, 2024',
    },
    {
      id: 2,
      name: 'Brand Refresh Campaign',
      progress: 45,
      status: 'In Progress',
      statusColor: 'bg-blue-500',
      budget: '$8,500',
      spent: '$3,825',
      deadline: 'Jul 22, 2024',
    },
    {
      id: 3,
      name: 'Q3 Content Series',
      progress: 20,
      status: 'AI Planning',
      statusColor: 'bg-purple-500',
      budget: '$12,000',
      spent: '$2,400',
      deadline: 'Sep 30, 2024',
    },
  ];

  const notifications = [
    { id: 1, text: 'New freelancer match for Summer Product Launch', time: '5m ago', unread: true },
    { id: 2, text: 'Campaign budget alert: Q3 Content Series at 80%', time: '1h ago', unread: true },
    { id: 3, text: 'AI optimized your Brand Refresh timeline', time: '3h ago', unread: false },
    { id: 4, text: 'Payment processed for designer work', time: '1d ago', unread: false },
    { id: 5, text: 'New campaign insight available', time: '2d ago', unread: false },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-amber-50 to-teal-50">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Zap className="text-teal-600" size={28} />
            <span className="text-2xl font-semibold text-gray-900">CreatorOS</span>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-3 bg-teal-50 text-teal-700 rounded-lg font-medium">
                <LayoutDashboard size={20} />
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                <FolderKanban size={20} />
                Campaigns
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Users size={20} />
                Freelancers
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                <DollarSign size={20} />
                Budget
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Settings size={20} />
                Settings
              </a>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
              <span className="text-teal-700 font-semibold">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 truncate">Jane Doe</p>
              <p className="text-sm text-gray-500 truncate">Professional Plan</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your campaigns.</p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="text-teal-600" size={24} />
                </div>
                <span className="text-sm font-medium text-teal-600">+12.5%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">$25,700</h3>
              <p className="text-gray-600 text-sm">Total Budget</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-blue-600" size={24} />
                </div>
                <span className="text-sm font-medium text-blue-600">Active</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">$10,125</h3>
              <p className="text-gray-600 text-sm">Spent This Month</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FolderKanban className="text-purple-600" size={24} />
                </div>
                <span className="text-sm font-medium text-purple-600">3 Active</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">5</h3>
              <p className="text-gray-600 text-sm">Total Campaigns</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Active Campaigns</h2>
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{campaign.name}</h3>
                      <div className="flex items-center gap-3">
                        <span className={`${campaign.statusColor} text-white text-xs font-medium px-3 py-1 rounded-full`}>
                          {campaign.status}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar size={14} />
                          {campaign.deadline}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Budget</p>
                      <p className="text-lg font-semibold text-gray-900">{campaign.budget}</p>
                      <p className="text-xs text-gray-500">Spent: {campaign.spent}</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium text-gray-900">{campaign.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-teal-600 h-2 rounded-full transition-all"
                        style={{ width: `${campaign.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
                  <Bell className="text-gray-400" size={20} />
                </div>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`pb-4 border-b border-gray-100 last:border-0 last:pb-0 ${notification.unread ? 'bg-teal-50/50 -mx-6 px-6 py-3' : ''}`}>
                      <p className="text-sm text-gray-900 mb-1">{notification.text}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">AI Insights Ready</h3>
                <p className="text-teal-100 text-sm mb-4">
                  Your campaigns have new AI-powered recommendations to improve performance.
                </p>
                <button className="w-full bg-white text-teal-700 py-2 rounded-lg hover:bg-teal-50 transition-colors font-medium">
                  View Insights
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
