import { BookOpenText } from "lucide-react";
import React from "react";

type Props = {};

const AuthPage = (props: Props) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="m-auto shadow-md border-slate-400 bg-slate-300 dark:bg-gray-800 border dark:border-gray-700 rounded-sm flex gap-4 p-4">
        <BookOpenText className="w-[300px] h-[300px]" />
        <div className="w-[300px]">
          awfawgawg
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
