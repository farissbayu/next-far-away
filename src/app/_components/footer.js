import { prisma } from "@/utils/prisma";
import React from "react";

export const Footer = async () => {
  const items = await prisma.item.findMany();
  const itemsPacked = items.filter((item) => item.isChecked).length;
  const percentage = (itemsPacked / items.length) * 100 || 0;

  return (
    <div className="bg-indigo-700 text-center text-white py-2">
      {percentage < 100 ? (
        <p>
          You have {items.length} items on your list, and you already packed{" "}
          {itemsPacked} ({percentage.toFixed(0)}%)
        </p>
      ) : (
        <p>You are ready to go!</p>
      )}
    </div>
  );
};
