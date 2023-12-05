import React from "react";

import { Button, ButtonProps } from "@/components/ui/button";
import Link from "next/link";

type Props = Omit<ButtonProps, "onClick" | "type">;

const AuthButton = ({ children, ...rest }: Props) => {
  return (
    <Button {...rest} type="button" asChild>
      <Link href="/auth">{children}</Link>
    </Button>
  );
};

export default AuthButton;
