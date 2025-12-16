import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Search from "./Search";
import Cart from "./Cart";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <NavLinks />
        <div className="flex items-center gap-3">
          <Search />
          <Cart />
        </div>
      </div>
    </nav>
  );
}
