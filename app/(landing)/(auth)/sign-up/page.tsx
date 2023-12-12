"use client";

import FormInput from "@/components/form-input";
import FormLabel from "@/components/form-label";
import { Button } from "@/components/ui/button";
import { Credentials, signUp } from "@/firebase/auth/auth";
import { useFormInput } from "@/hooks/useFormInput";
import { useSubmitButton } from "@/hooks/useSubmitButton";
import { UserCredential } from "firebase/auth";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const SignUp = (props: Props) => {
  const router = useRouter();
  const onSuccess = () => {
    router.push("/home");
  };
  const onError = () => {
    clear();
  }
  const { formData, onChange, clear } = useFormInput({
    email: "",
    password: "",
  });
  const { data, execute, loading, errors } = useSubmitButton<
    Credentials,
    UserCredential
  >(signUp, {
    onSuccess,
    onError
  });
  const onSubmit = () => {
    execute(formData);
  };

  return (
    <form action={onSubmit} className="flex flex-col gap-4">
      <FormLabel icon={<LogIn />}>SIGN UP</FormLabel>
      <p>Create new account:</p>
      <FormInput
        name="email"
        labelText="YOUR EMAIL"
        id="email"
        value={formData.email}
        onChange={onChange}
        disabled={loading}
      />
      <FormInput
        name="password"
        labelText="YOUR PASSWORD"
        id="password"
        value={formData.password}
        onChange={onChange}
        disabled={loading}
      />
      <Button type="submit" disabled={loading}>
        SIGN UP
      </Button>
    </form>
  );
};

export default SignUp;
