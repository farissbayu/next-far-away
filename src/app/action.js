"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function addItemAction(formData) {
  const name = formData.get("name");
  const amount = Number(formData.get("amount"));

  await prisma.item.create({
    data: {
      name,
      amount,
    },
  });

  revalidatePath("/");
}

export async function toggleItemAction(id, isChecked) {
  await prisma.item.update({
    where: {
      id,
    },
    data: {
      isChecked: !isChecked,
    },
  });

  revalidatePath("/");
}

export async function deleteItemAction(id) {
  await prisma.item.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
}
