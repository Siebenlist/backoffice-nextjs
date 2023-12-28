"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`p-[20px] flex items-center gap-[10px] my-[10px] rounded-lg hover:bg-[#2e374a] ${
        pathname === item.path && "bg-[#2e374a]"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
