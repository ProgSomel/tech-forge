import React from "react";

export default function FilteringHeader() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
        <button className="text-xs text-rose-500 font-semibold">Clear</button>
      </div>
    </>
  );
}
