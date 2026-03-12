"use client";

export default function ButtonComponent({ onClick, children, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-[#262b57] text-white text-sm font-medium rounded-lg transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
