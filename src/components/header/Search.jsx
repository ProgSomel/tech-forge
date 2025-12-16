import React from "react";
import Icon from "../UI/Icon";
import Input from "../UI/Input";

export default function Search() {
  return (
    <div className="hidden sm:block">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 bg-white shadow-sm">
        <Icon className="h-4 w-4 text-slate-400" name="searchIcon" />
        <Input
          type="text"
          placeholder="Search laptops, GPUs, desktops..."
          className="bg-transparent text-sm placeholder:text-slate-400 focus:outline-none w-64"
        ></Input>
      </div>
    </div>
  );
}
