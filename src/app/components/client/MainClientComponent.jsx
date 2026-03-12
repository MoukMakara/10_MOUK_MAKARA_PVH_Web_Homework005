"use client";
import { items as firstItems } from "../../data";
import { ArrowDownAZ, ArrowUpZA, Bookmark } from "lucide-react";
import React, { useEffect, useState } from "react";
import ViewDetailsComponent from "./ViewDetailsComponent";
import ButtonComponent from "./ButtonComponent";
import Image from "next/image";

export default function MainClientComponent() {
  //   console.log("first item:", firstItems);
  const [items, setItems] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setItems(firstItems);
  }, []);

  let displayItems = [...items];
  console.log("display item:", displayItems);

  if (showBookmarks) {
    displayItems = displayItems.filter((item) => item.saved);
  }

  if (sortOrder === "asc") {
    displayItems.sort((a, b) => a.item_name.localeCompare(b.item_name));
  } else if (sortOrder === "desc") {
    displayItems.sort((a, b) => b.item_name.localeCompare(a.item_name));
  }

  const toggleBookmark = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, saved: !item.saved } : item,
      ),
    );
  };

  const btnBack = () => {
    setShowBookmarks(false);
    setSortOrder(null);
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-6 text-white border-b border-gray-800 pb-4">
        <button
          onClick={btnBack}
          className="bg-gray-200 text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-white "
        >
          Back
        </button>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setShowBookmarks(!showBookmarks)}
            className={`flex items-center gap-2 text-sm font-medium  ${
              showBookmarks
                ? "text-white"
                : "text-gray-300 hover:text-yellow-500"
            }`}
          >
            Your Bookmark
            <Bookmark
              size={18}
              fill={showBookmarks ? "currentColor" : "none"}
            />
          </button>

          <div className="flex items-center gap-3 border-l border-gray-700 pl-4">
            <button
              onClick={() => setSortOrder("asc")}
              className={` ${sortOrder === "asc" ? "text-white" : "text-gray-400 hover:text-yellow-500"}`}
              title="Sort A to Z"
            >
              <ArrowDownAZ size={20} />
            </button>
            <button
              onClick={() => setSortOrder("desc")}
              className={`${sortOrder === "desc" ? "text-white" : "text-gray-400 hover:text-yellow-500"}`}
              title="Sort Z to A"
            >
              <ArrowUpZA size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {displayItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#13151f] border border-gray-800 rounded-xl p-4 flex items-center gap-4 "
          >
            <div className="w-24 h-16 relative rounded-lg bg-white ">
              <Image
                src={item.image}
                alt={item.item_name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h3 className="text-white font-medium">{item.item_name}</h3>
                <span className="text-gray-400 text-sm">
                  ${item.item_price.toFixed(2)}
                </span>
                <button
                  onClick={() => toggleBookmark(item.id)}
                  className="ml-2"
                >
                  <Bookmark
                    size={16}
                    className={
                      item.saved
                        ? "text-yellow-400"
                        : "text-gray-500 hover:text-gray-300"
                    }
                    fill={item.saved ? "currentColor" : "none"}
                  />
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-1">
                {item.item_description}
              </p>
            </div>

            <ButtonComponent onClick={() => setSelectedItem(item)}>
              View
            </ButtonComponent>
          </div>
        ))}
      </div>

      <ViewDetailsComponent
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
