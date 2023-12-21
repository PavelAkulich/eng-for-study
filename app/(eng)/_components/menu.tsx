import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  open?: boolean;
};

const menuItems = [
  {
    href: "/home",
    icon: <MenuIcon className="w-8 h-8" />,
    label: "menu item",
  },
  {
    href: "/home2",
    icon: <MenuIcon className="w-8 h-8" />,
    label: "menu item",
  },
];

const Menu = ({ open = true }: Props) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2">
      {menuItems.map((item) => (
        <Link
          href={item.href}
          key={item.href}
          className={cn(
            "flex gap-2 items-center hover:bg-transparent/10 transition-all duration-300 dark:hover:bg-transparent/50 p-2 overflow-hidden",
            open ? "justify-between" : "justify-center",
            pathname === item.href
              ? "bg-transparent/5 dark:bg-transparent/40"
              : ""
          )}
        >
          {item.icon}
          <div
            className={cn("grow whitespace-nowrap", open ? "block" : "hidden")}
          >
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
