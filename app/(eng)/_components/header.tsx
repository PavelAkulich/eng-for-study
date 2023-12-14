import React from "react";
import { BookOpenCheck, User } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

export const Header = (props: Props) => {
  return (
    <div className="bg-slate-300 dark:bg-gray-900 w-full flex justify-end  p-2">
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
