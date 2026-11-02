
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ItemContext = createContext();

const sampleItems = [
  {
    id: 1,
    name: "Black Water Bottle",
    category: "Accessories",
    description: "A black water bottle found near the library.",
    location: "College Library",
    date: "2026-10-30",
    status: "Found",
    contact: "student@example.com",
  },
  {
    id: 2,
    name: "Student ID Card",
    category: "ID Cards",
    description: "A student ID card was lost.",
    location: "Main Block",
    date: "2026-10-29",
    status: "Lost",
    contact: "student@example.com",
  },
  {
    id: 3,
    name: "Blue Notebook",
    category: "Stationery",
    description: "A blue notebook found in the classroom.",
    location: "Classroom 204",
    date: "2026-10-30",
    status: "Found",
    contact: "student@example.com",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    category: "Electronics",
    description: "Wireless earbuds were lost.",
    location: "College Canteen",
    date: "2026-10-28",
    status: "Lost",
    contact: "student@example.com",
  },
  {
    id: 5,
    name: "House Keys",
    category: "Accessories",
    description: "A set of keys was found.",
    location: "Parking Area",
    date: "2026-10-27",
    status: "Found",
    contact: "student@example.com",
  },
  {
    id: 6,
    name: "Scientific Calculator",
    category: "Electronics",
    description: "A scientific calculator was lost.",
    location: "Engineering Block",
    date: "2026-10-26",
    status: "Lost",
    contact: "student@example.com",
  },
];

export function ItemProvider({ children }) {
  const [items, setItems] = useState(sampleItems);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved items from browser storage
  useEffect(() => {
    try {
      const savedItems = localStorage.getItem("campusconnect-items");

      if (savedItems) {
        setItems(JSON.parse(savedItems));
      }
    } catch (error) {
      console.error("Unable to load saved items:", error);
    }

    setIsLoaded(true);
  }, []);

  // Save items whenever the list changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("campusconnect-items", JSON.stringify(items));
    }
  }, [items, isLoaded]);

  // Add a new lost or found item
  function addItem(newItem) {
    const itemWithId = {
      ...newItem,
      id: Date.now(),
    };

    setItems((previousItems) => [
      itemWithId,
      ...previousItems,
    ]);
  }

  return (
    <ItemContext.Provider value={{ items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
}

export function useItems() {
  return useContext(ItemContext);
}
