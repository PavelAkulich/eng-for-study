import React from "react";
import { Github } from "lucide-react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="w-full bg-slate-300 dark:bg-gray-900 flex justify-between p-2">
      <div className="text-sm flex items-center pl-2">
        App for studying english
      </div>
      <div className="text-sm pr-2">
        <a
          href="https://github.com/PavelAkulich"
          target="_blank"
          className="flex gap-2 justify-center items-center hover:opacity-60 transition-all"
        >
          <Github />
          PavelAkulich
        </a>
      </div>
    </footer>
  );
};
