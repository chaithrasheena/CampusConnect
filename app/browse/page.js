
"use client";

import { useState } from "react";
import { useItems } from "../../context/ItemContext";

export default function BrowsePage() {
  const { items } = useItems();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [category, setCategory] = useState("All");

// Remove duplicate reports
const uniqueItems = items.filter((item, index, self) => {
  const currentKey = [
    item.name?.trim().toLowerCase(),
    item.category?.trim().toLowerCase(),
    item.location?.trim().toLowerCase(),
    item.status?.trim().toLowerCase()
  ].join("|");

  return (
    index ===
    self.findIndex((other) => {
      const otherKey = [
        other.name?.trim().toLowerCase(),
        other.category?.trim().toLowerCase(),
        other.location?.trim().toLowerCase(),
        other.status?.trim().toLowerCase()
      ].join("|");

      return currentKey === otherKey;
    })
  );
});

  const filteredItems = uniqueItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || item.status === status;

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-blue-700">
            CampusConnect
          </a>

          <div className="flex gap-6 items-center text-sm font-medium">
            <a href="/" className="text-black hover:text-blue-700">
              Home
            </a>

            <a href="/browse" className="text-black hover:text-blue-700">
              Browse Items
            </a>

            <a href="/report-lost" className="text-black hover:text-blue-700">
              Report Lost
            </a>

            <a href="/report-found" className="text-black hover:text-blue-700">
              Report Found
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">
            Browse Lost & Found Items
          </h1>

          <p className="text-slate-600 mt-2">
            Search for lost belongings or browse items found on campus.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Search */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-black">
                Search items
              </label>

              <input
                type="text"
                placeholder="Search by item name or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder:text-slate-500"
              />
            </div>

            {/* Status Filter */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-black">
                Status
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border border-slate-300 rounded-lg px-4 py-3 outline-none text-black bg-white"
              >
                <option value="All">All Items</option>
                <option value="Lost">Lost</option>
                <option value="Found">Found</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-black">
                Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-slate-300 rounded-lg px-4 py-3 outline-none text-black bg-white"
              >
                <option value="All">All Categories</option>
                <option value="Accessories">Accessories</option>
                <option value="ID Cards">ID Cards</option>
                <option value="Stationery">Stationery</option>
                <option value="Electronics">Electronics</option>
                <option value="Other">Other</option>
              </select>
            </div>

          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">
            Recently Reported Items
          </h2>

          <p className="text-sm text-slate-600">
            {filteredItems.length} items found
          </p>
        </div>

        {/* Items List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition"
              >

                <div className="flex justify-between items-center mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      item.status === "Lost"
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.status}
                  </span>

                  <span className="text-xs text-black">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-black mb-3">
                  {item.name}
                </h3>

                <p className="text-sm text-black mb-2">
                  <strong>Location:</strong> {item.location}
                </p>

                <p className="text-sm text-black mb-2">
                  <strong>Date:</strong> {item.date}
                </p>

                <p className="text-sm text-slate-600 mb-5 line-clamp-2">
                  {item.description}
                </p>

                <a
                  href={`/items/${item.id}`}
                  className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Details
                </a>

              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-white rounded-xl border border-slate-200">
              <h3 className="text-lg font-semibold text-black">
                No items found
              </h3>

              <p className="text-slate-600 mt-2">
                Try another search or change your filters.
              </p>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center">
        <p className="text-sm text-slate-600">
          © 2026 CampusConnect. Helping belongings find their owners.
        </p>
      </footer>

    </div>
  );
}
