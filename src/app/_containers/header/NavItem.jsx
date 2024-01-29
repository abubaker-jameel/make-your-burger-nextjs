"use client";

import React from "react";
import navData from "@/app/_data/navData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = () => {
  const pathname = usePathname();

  // nav items
  const navItem = navData.data.map((item) => {
    return (
      <li
        key={item.id}
        className="text-primary-black lg:[&:not(:last-child)]:mr-14"
      >
        <Link
          href={item.href}
          className={pathname === item.href ? "font-bold" : "font-normal"}
        >
          {item.name}
        </Link>
      </li>
    );
  });

  return navItem;
};

export default NavItem;
