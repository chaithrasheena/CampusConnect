
const sampleItems = [
  {
    id: 1,
    name: "Black Water Bottle",
    category: "Accessories",
    location: "College Library",
    date: "Today",
    status: "Found",
    icon: "🧴",
  },
  {
    id: 2,
    name: "Student ID Card",
    category: "ID Cards",
    location: "Main Block",
    date: "Yesterday",
    status: "Lost",
    icon: "🪪",
  },
  {
    id: 3,
    name: "Blue Notebook",
    category: "Stationery",
    location: "Classroom 204",
    date: "Today",
    status: "Found",
    icon: "📘",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-2xl font-bold text-blue-700">
            CampusConnect<span className="text-orange-500">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="/" className="font-medium text-blue-700">Home</a>
            <a href="/browse" className="hover:text-blue-700">Browse Items</a>
            <a href="/report-lost" className="hover:text-blue-700">Report Lost</a>
            <a href="/report-found" className="hover:text-blue-700">Report Found</a>
          </div>

          <a
            href="/profile"
            className="rounded-lg border border-slate-300 px-4 py-2 font-medium hover:bg-slate-50"
          >
            My Profile
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            YOUR CAMPUS LOST & FOUND HUB
          </span>

          <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Lost something?
            <span className="block text-blue-700">Let's find it.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            A simple way to report lost belongings, discover found items
            and reconnect students with the things that matter.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/browse"
              className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white shadow-sm hover:bg-blue-800"
            >
              Browse Items →
            </a>

            <a
              href="/report-lost"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold hover:bg-slate-100"
            >
              Report Lost Item
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-blue-700 p-8 text-white shadow-xl md:p-12">
          <div className="text-7xl">🎒</div>
          <h2 className="mt-8 text-3xl font-bold">
            Every item has a way back home.
          </h2>
          <p className="mt-4 leading-7 text-blue-100">
            Help your campus community by reporting items you find
            and checking listings for belongings you have lost.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-2xl font-bold">Easy</p>
              <p className="mt-1 text-sm text-blue-100">To report items</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-2xl font-bold">Together</p>
              <p className="mt-1 text-sm text-blue-100">As a campus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-2xl font-bold">How can we help you?</h2>
        <p className="mt-2 text-slate-500">
          Choose what you would like to do.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <a href="/browse" className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="text-3xl">🔎</div>
            <h3 className="mt-4 text-lg font-bold">Browse Items</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Explore items reported lost or found around campus.
            </p>
            <p className="mt-5 font-semibold text-blue-700">Explore listings →</p>
          </a>

          <a href="/report-lost" className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="text-3xl">📢</div>
            <h3 className="mt-4 text-lg font-bold">Report Lost Item</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Tell the campus community about something you have lost.
            </p>
            <p className="mt-5 font-semibold text-blue-700">Create a report →</p>
          </a>

          <a href="/report-found" className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="text-3xl">🤝</div>
            <h3 className="mt-4 text-lg font-bold">Report Found Item</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Help someone recover their belongings by reporting an item.
            </p>
            <p className="mt-5 font-semibold text-blue-700">Report an item →</p>
          </a>
        </div>
      </section>

      {/* Recent Items */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Recent Listings</h2>
              <p className="mt-2 text-slate-500">
                Some of the latest reports from campus.
              </p>
            </div>
            <a href="/browse" className="font-semibold text-blue-700">
              View all →
            </a>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {sampleItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 p-6 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{item.icon}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.status === "Found"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold">{item.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                <div className="mt-5 space-y-2 text-sm text-slate-600">
                  <p>📍 {item.location}</p>
                  <p>📅 {item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 px-6 py-8 text-center text-slate-300">
        <h2 className="text-xl font-bold text-white">CampusConnect.</h2>
        <p className="mt-2 text-sm">
          Connecting lost belongings with their rightful owners.
        </p>
        <p className="mt-5 text-xs text-slate-400">
          © 2026 CampusConnect. Built for our campus community.
        </p>
      </footer>
    </main>
  );
}
