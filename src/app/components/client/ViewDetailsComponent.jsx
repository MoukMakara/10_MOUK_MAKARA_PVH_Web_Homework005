"use client";

export default function ViewDetailsComponent({ item, onClose }) {
  console.log(item);
  if (!item) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-[#16171e] border border-gray-800 rounded-xl p-6  ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-white">Item Details</h2>
          <button
            onClick={onClose}
            className="text-sm px-3 py-1 bg-gray-800 text-white rounded-md"
          >
            Close
          </button>
        </div>

        <div className="space-y-3 text-sm text-gray-300">
          <p>
            <strong className="text-white">Id:</strong> {item.id}
          </p>
          <p>
            <strong className="text-white">Name:</strong> {item.item_name}
          </p>
          <p>
            <strong className="text-white">Price:</strong> $
            {item.item_price.toFixed(2)}
          </p>
          <div>
            <p className="">
              <strong className="text-white mb-1">Description: </strong>
              {item.item_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
