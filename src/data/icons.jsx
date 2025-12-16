import React from "react";
class Icon {
  constructor(innerSVG, attributes) {
    this.innerSVG = innerSVG;
    this.attributes = attributes;
  }
}

export const icons = {
  searchIcon: new Icon(
    (
      <>
        <circle cx="11" cy="11" r="7" />
        <line x1="16.65" y1="16.65" x2="21" y2="21" />
      </>
    ),
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
    }
  ),

  cartIcon: new Icon(
    (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      ></path>
    ),
    {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
    }
  ),
};
