"use client";

import FormInput from "@/components/form-input";
import FormLabel from "@/components/form-label";
import { Button } from "@/components/ui/button";
import { Credentials, signIn } from "@/firebase/auth/auth";
import { useFormInput } from "@/hooks/useFormInput";
import { useSubmitButton } from "@/hooks/useSubmitButton";
import { UserCredential } from "firebase/auth";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const SignIn = (props: Props) => {
  const onSuccess = () => {
    router.push("/home");
  };
  const onError = () => {
    clear();
  }
  const { data, execute, loading, errors } = useSubmitButton<
    Credentials,
    UserCredential
  >(signIn, { onSuccess, onError });
  const router = useRouter();
  const { formData, onChange, clear } = useFormInput({
    email: "",
    password: "",
  });
  const onSubmit = () => {
    execute(formData);
  };
  return (
    <form action={onSubmit} className="flex flex-col gap-4">
      <FormLabel icon={<LogIn />}>SIGN IN</FormLabel>
      <FormInput
        name="email"
        labelText="EMAIL"
        id="email"
        value={formData.email}
        onChange={onChange}
        disabled={loading}
      />
      <FormInput
        name="password"
        labelText="PASSWORD"
        id="password"
        value={formData.password}
        onChange={onChange}
        disabled={loading}
      />
      <Button type="submit" disabled={loading}>
        SIGN IN
      </Button>
      <Button variant="link" type="button" asChild>
        <Link href="/sign-up">No accaunt?</Link>
      </Button>
    </form>
  );
};

export default SignIn;
