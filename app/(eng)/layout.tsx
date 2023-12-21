"use client";
import React from "react";
import { Header } from "./_components/header";
import { Footer } from "@/components/footer";
import Loader from "@/components/loader";
import Sidebar from "./_components/sidebar";
import { useMounted } from "@/hooks/useMounted";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/components/auth-provider";

type Props = {
  children: React.ReactNode;
};

const EngLayout = ({ children }: Props) => {
  const { loading } = useMounted();
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null && !loading) router.push("/");
  }, [user]);

  if (loading) return <Loader />;
  return (
    <div className="bg-background h-full w-full flex justify-between align-middle items-center">
      <Sidebar />
      <div className="grow flex h-full w-full">
        <div className="flex h-full w-full  flex-col ">
          <Header />
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
