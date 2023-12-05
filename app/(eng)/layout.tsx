import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/firebase/auth/auth";

type Props = {
  children: React.ReactNode;
};

const EngLayout = ({ children }: Props) => {

  if(!auth.currentUser) redirect('/auth');

  return (
    <div>
      test
      {children}
    </div>
  );
};

export default EngLayout;
