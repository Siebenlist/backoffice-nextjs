"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between p-[20px] rounded-lg bg-bgSoft">
      <div className="text-textSoft font-bold capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[10px] bg-[#2e374a] p-[10px] rounded-lg">
          <MdSearch />
          <input
            type="search"
            placeholder="Search..."
            className="bg-transparent border-none text-text"
          />
        </div>
        <div className="flex gap-[20px]">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
