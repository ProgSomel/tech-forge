import React from "react";
import { icons } from "../../data/icons";

export default function Icon({ className, name }) {
  const icon = icons[name];
  return (
    <svg className={className} {...icon.attributes}>
      {icon.innerSVG}
    </svg>
  );
}
