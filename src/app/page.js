import React from "react";
import { Header } from "./_components/header";
import { AddItem } from "./_components/add-item";
import { ItemList } from "./_components/item-list";
import { Footer } from "./_components/footer";

export default function Page() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Header />
      <AddItem />
      <ItemList />
      <Footer />
    </main>
  );
}
