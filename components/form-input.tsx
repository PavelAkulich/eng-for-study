import React from "react";
import { Input, InputProps } from "@/components/ui/input";
import { Label } from "./ui/label";

type Props = {
  errors?: string | string[];
  labelText?: string;
} & InputProps;

const FormInput = ({ labelText = undefined, errors, ...inputProps }: Props) => {
  return (
    <>
      {labelText && <Label htmlFor={inputProps.id}>{labelText}</Label>}
      <Input {...inputProps} />
    </>
  );
};

export default FormInput;
