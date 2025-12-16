import React from "react";
import Category from "./category";
import PriceRange from "./PriceRange";
import Rating from "./Rating";
import FilteringHeader from "./FilteringHeader";

export default function Filtering() {
  return (
    <>
      <div className="md:col-span-1 space-y-4">
        <div className="soft-card p-6">
          <FilteringHeader />

          <Category />

          <PriceRange />

          <Rating />
        </div>
      </div>
    </>
  );
}
