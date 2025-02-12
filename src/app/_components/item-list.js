import { prisma } from "@/utils/prisma";
import React from "react";
import { Item } from "./item";

export const ItemList = async () => {
  const items = await prisma.item.findMany();

  return (
    <div className="flex-grow bg-indigo-200">
      <div className="flex flex-wrap gap-2 w-full max-w-4xl mx-auto items-center justify-center py-2">
        {items.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
