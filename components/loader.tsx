import { cn } from "@/lib/utils";
import { LoaderIcon } from "lucide-react";
import React from "react";

type Props = {
    classLoader?: string
};

const Loader = ({classLoader}: Props) => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="classLoader">
        <LoaderIcon className={
            cn('w-10 h-10 animate-spin', classLoader)
        } />
      </div>
    </div>
  );
};

export default Loader;
