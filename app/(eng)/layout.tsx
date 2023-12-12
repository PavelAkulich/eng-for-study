"use client";
import React from "react";
import { redirect } from "next/navigation";
import { useIsLogged } from "@/hooks/useIsLogged";
import { Header } from "./_components/header";
import { Footer } from "@/components/footer";
import Loader from "@/components/loader";
import Sidebar from "./_components/sidebar";

type Props = {
  children: React.ReactNode;
};

const EngLayout = ({ children }: Props) => {
  const { loading, user } = useIsLogged();
  if (loading) return <Loader />;
  // if (!loading && !user) redirect('/sign-in');
  return (
    <div className="bg-background h-full w-full flex flex-col justify-between align-middle items-center">
      <Header />
      <div className="flex h-full w-full">
        <Sidebar />
        <div className="grow flex flex-col h-full w-full">
          <main className="grow flex flex-col justify-center items-center p-4 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 from-slate-100 to-slate-300 ">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default EngLayout;
