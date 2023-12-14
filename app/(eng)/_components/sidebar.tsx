"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookOpenCheck, PanelLeftClose, PanelRightClose } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "./menu";
import MobileSidebar from "./mobile-sidebar";

type Props = {};

const Sidebar = (props: Props) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div
        className={cn(
          "h-full bg-slate-300 dark:bg-gray-900 md:flex dark:border-r-gray-700 gap-10 hidden flex-col border border-r-slate-400 p-2 transition-all",
          !open ? "w-20" : "w-[400px]"
        )}
      >
        <div className="flex justify-between">
          <Link
            href="/home"
            className={cn(
              "flex gap-2 items-center pl-2 hover:opacity-60 transition-all overflow-hidden",
              open ? "flex" : "hidden"
            )}
          >
            <BookOpenCheck className="w-8 h-8" />
            <span className="hidden md:block whitespace-nowrap">
              ENG FOR STUDY
            </span>
          </Link>
          <Button variant="ghost" onClick={() => setOpen((prev) => !prev)}>
            {open ? <PanelLeftClose /> : <PanelRightClose />}
          </Button>
        </div>
        <Menu open={open} />
      </div>
      <div className="block absolute top-2 left-2 md:hidden">
        <MobileSidebar />
      </div>
    </>
  );
};

export default Sidebar;
