"use client";

export default function SearchComponent() {
  return (
    <div className="relative w-64">
      <input
        type="text"
        placeholder="Search by item name..."
        className="w-full bg-[#1e2130] text-sm text-gray-300 px-4 py-2 rounded-lg border border-gray-700"
      />
    </div>
  );
}
