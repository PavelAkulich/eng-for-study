import React from "react";
import { BookOpenCheck, User } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

export const Header = (props: Props) => {
  return (
    <div className="bg-slate-300 dark:bg-gray-900 w-full flex justify-between p-2">
      <Link href="/home" className="flex gap-2 items-center pl-2 hover:opacity-60 transition-all">
        <BookOpenCheck className="w-8 h-8" />
        <span className="hidden md:block">ENG FOR STUDY</span>
      </Link>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button variant="ghost">
          <User />
        </Button>
        <Button>Log out</Button>
      </div>
    </div>
  );
};
