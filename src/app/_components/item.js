"use client";

import { deleteItemAction, toggleItemAction } from "../action";

export const Item = ({ id, name, amount, isChecked }) => {
  return (
    <div className="flex flex-grow flex-row w-fit h-fit items-center space-x-2">
      <input
        type="checkbox"
        defaultChecked={isChecked}
        onChange={() => toggleItemAction(id, isChecked)}
      />
      <p className={isChecked ? "line-through text-gray-500" : ""}>
        {amount} {name}
      </p>
      <button
        className="text-red-700 font-bold text-sm"
        onClick={() => deleteItemAction(id)}
      >
        X
      </button>
    </div>
  );
};
