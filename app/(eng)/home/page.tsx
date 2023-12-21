import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Card from "../_components/card";

const menuItems = [
  {
    href: "/home",
    icon: <MenuIcon className="w-8 h-8" />,
    label: "menu item",
    description: "menu1 descr",
  },
  {
    href: "/home2",
    icon: <MenuIcon className="w-8 h-8" />,
    label: "menu item",
    description: "menu2 descr",
  },
];

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="h-full w-full flex gap-4 items-start">
      {menuItems.map((item) => (
        <Link href={item.href} className="hover:opacity-70 basis-full md:basis-1/2 lg:basis-1/3 transition-all duration-300">
          <Card
            title={item.label}
            description={item.description}
            icon={item.icon}
          />
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
