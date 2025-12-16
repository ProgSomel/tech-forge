import React from "react";
import Icon from "../UI/Icon";

export default function Cart() {
  return (
    <a
      href="cart.html"
      className="relative flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 bg-white shadow-sm hover:border-rose-300"
    >
      <Icon className="w-5 h-5 text-rose-500" name="cartIcon" />
      <span className="text-sm font-semibold text-slate-900">Cart</span>
      <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-rose-500 text-white text-xs font-bold flex items-center justify-center shadow">
        3
      </span>
    </a>
  );
}
