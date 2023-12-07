'use client'
import React from "react";
import { redirect } from "next/navigation";
import { useIsLogged } from "@/hooks/useIsLogged";

type Props = {
  children: React.ReactNode;
};

const EngLayout = ({ children }: Props) => {
  const {loading, user} = useIsLogged()
  if (loading) return 'loading...'
  if (!loading && !user) redirect('/sign-in');
  return (
    <div>
      test
      {children}
    </div>
  );
};

export default EngLayout;
