import React from "react";

export default function NavLinks() {
  const navLinks = [
    { href: "#", label: "Products" },
    { href: "#", label: "About" },
    { href: "#", label: "Support" },
  ];
  return (
    <div className="hidden md:flex items-center gap-6 text-sm">
      {navLinks.map((link) => (
        <a href={link.href} className="text-slate-700 hover:text-slate-900">
          {link.label}
        </a>
      ))}
    </div>
  );
}
