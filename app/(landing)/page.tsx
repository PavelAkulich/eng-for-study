import React from "react";
import {BookOpenText} from 'lucide-react'

import AuthButton from "./_components/auth-button";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="w-full text-center text-4xl">ENG FOR STUDY</div>
      <BookOpenText className="w-[200px] h-[200px]"/>
      <div className="text-center text-xl">
        Learn English quickly. Learn English easily. <br /> Learn English with ENG FOR
        STUDY
      </div>
      <AuthButton>Start NOW</AuthButton>
    </div>
  );
};

export default LandingPage;
