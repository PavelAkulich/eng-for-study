import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { BookOpenCheck } from "lucide-react";
import React from "react";

type Props = {};

export const Header = (props: Props) => {
  return (
    <div className="bg-slate-300 dark:bg-gray-900 w-full flex justify-between p-2">
      <div className="flex gap-2 items-center pl-2">
        <BookOpenCheck className="w-8 h-8" />
        ENG FOR STUDY
      </div>
      <div className="flex items-center">
        <ModeToggle />
        <Button variant="link">Log In</Button>
      </div>
    </div>
  );
};
