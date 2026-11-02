
"use client";

import { useParams } from "next/navigation";
import { useItems } from "../../../context/ItemContext";

export default function ItemDetailsPage() {
  const params = useParams();
  const { items } = useItems();

  const item = items.find(
    (item) => String(item.id) === String(params.id)
  );

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-black">
          Item Not Found
        </h1>
        <p className="text-slate-600 mt-2">
          This item may have been removed or does not exist.
        </p>
        <a
          href="/browse"
          className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Back to Browse Items
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-blue-700">
            CampusConnect
          </a>

          <div className="flex gap-6 text-sm font-medium">
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

      {/* Item Details */}
      <main className="max-w-3xl mx-auto px-6 py-12">

        <a
          href="/browse"
          className="text-blue-600 font-medium hover:underline"
        >
          ← Back to Browse Items
        </a>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mt-6">

          <div className="flex justify-between items-center mb-6">
            <span
              className={`text-sm font-semibold px-4 py-2 rounded-full ${
                item.status === "Lost"
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {item.status}
            </span>

            <span className="text-sm text-slate-600">
              {item.category}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-black mb-6">
            {item.name}
          </h1>

          <div className="space-y-5">

            <div>
              <h2 className="text-sm font-semibold text-slate-500">
                DESCRIPTION
              </h2>
              <p className="text-black mt-1">
                {item.description || "No description provided."}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-500">
                LOCATION
              </h2>
              <p className="text-black mt-1">
                {item.location}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-500">
                DATE REPORTED
              </h2>
              <p className="text-black mt-1">
                {item.date}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-500">
                CONTACT INFORMATION
              </h2>
              <p className="text-black mt-1">
                {item.contact || "Contact information not provided."}
              </p>
            </div>

          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <p className="text-slate-600 text-sm">
              If you recognize this item, use the contact information
              provided to get in touch with the person who reported it.
            </p>
          </div>

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
