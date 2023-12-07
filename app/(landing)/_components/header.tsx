import React from "react";
import { BookOpenCheck } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import AuthButton from "./auth-button";

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
        <AuthButton variant="link">Log In</AuthButton>
      </div>
    </div>
  );
};
