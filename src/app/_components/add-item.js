import React from "react";
import { addItemAction } from "../action";

export const AddItem = () => {
  return (
    <div className="w-full bg-indigo-400 p-4 flex items-center justify-center">
      <form
        className="w-full flex flex-row items-center justify-center space-x-2"
        action={addItemAction}
      >
        <p>What do you want for your trip?</p>
        <input
          type="text"
          className="w-48 px-2 py-1 border border-gray-300 rounded-full bg-indigo-50"
          placeholder="Enter item"
          name="name"
        />
        <select
          className="px-2 py-1 border border-gray-300 rounded-full bg-indigo-50"
          name="amount"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <button className="px-4 py-1 rounded-full bg-indigo-700 text-white font-semibold">
          Add item
        </button>
      </form>
    </div>
  );
};
