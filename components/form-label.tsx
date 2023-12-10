import React from "react";

type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const FormLabel = ({ children, icon }: Props) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex justify-between">
      {children}
      {icon? icon : null}
    </h4>
  );
};
export default FormLabel;
