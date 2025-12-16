import React from "react";
import Navbar from "./components/header/Navbar";
import Hero from "./components/hero/Hero";
import Filtering from "./components/products/Filtering/Filtering";
import Sorting from "./components/products/Sorting/Sorting";
import Products from "./components/products/productsGrid/Products";
import Footer from "./components/Footer/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main class="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <Hero />

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Filtering />

          <div class="md:col-span-3">
            <Sorting />

            <Products />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
