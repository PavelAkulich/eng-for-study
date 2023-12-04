import React from "react";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

type LayoutLandingProps = {
  children: React.ReactNode;
};

const LayoutLanding = ({ children }: LayoutLandingProps) => {
  return (
    <div className="bg-background h-full w-full flex flex-col justify-between align-middle items-center">
      <Header />
      <main className="grow bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 from-slate-100 to-slate-300 w-full p-4 flex justify-center">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutLanding;
