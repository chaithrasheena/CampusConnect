
"use client";

import { useState } from "react";
import { useItems } from "../../context/ItemContext";

export default function ReportFoundPage() {
  const { addItem } = useItems();

  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    description: "",
    location: "",
    date: "",
    contact: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setMessage("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      name: formData.itemName,
      category: formData.category,
      description: formData.description,
      location: formData.location,
      date: formData.date,
      contact: formData.contact,
      status: "Found",
    };

    addItem(newItem);

    setMessage("Your found item report has been submitted successfully!");

    setFormData({
      itemName: "",
      category: "",
      description: "",
      location: "",
      date: "",
      contact: "",
    });
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-blue-700">
            CampusConnect
          </a>

          <div className="flex gap-6 items-center text-sm font-medium">
            <a href="/" className="text-black hover:text-blue-700">Home</a>
            <a href="/browse" className="text-black hover:text-blue-700">Browse Items</a>
            <a href="/report-lost" className="text-black hover:text-blue-700">Report Lost</a>
            <a href="/report-found" className="text-black hover:text-blue-700">Report Found</a>
          </div>
        </div>
      </nav>

      {/* Form Section */}
      <main className="max-w-3xl mx-auto px-6 py-12">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">
            Report a Found Item
          </h1>

          <p className="text-slate-600 mt-2">
            Found something on campus? Share its details to help the owner find it.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 space-y-5"
        >

          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Item Name
            </label>

            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              placeholder="Example: Blue Notebook"
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-black placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-black bg-white outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a category</option>
              <option value="Accessories">Accessories</option>
              <option value="ID Cards">ID Cards</option>
              <option value="Stationery">Stationery</option>
              <option value="Electronics">Electronics</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the item you found..."
              required
              rows="4"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-black placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Found Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Example: College Canteen"
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-black placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Date Found
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-black outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Contact Information
            </label>

            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your email or phone number"
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-black placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Found Item Report
          </button>

          {message && (
            <p className="text-green-700 font-medium text-center">
              {message}
            </p>
          )}

        </form>
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
