'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Credentials, signUp } from "@/firebase/auth/auth";
import { useSubmitButton } from "@/hooks/useSubmitButton";
import { UserCredential } from "firebase/auth";
import { useRouter  } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

const SignUp = (props: Props) => {
  const router = useRouter()
  const onSuccess = () => {
    router.push('/home')
  }
  const {data, execute, loading, errors} = useSubmitButton<Credentials, UserCredential>(signUp, {
    onSuccess
  })
  const onSubmit = (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    execute({email, password})
  }

  return (
    <form action={onSubmit}>
      <Input name="email"/>
      <Input name="password"/>
      <Button type="submit">SIGN UP</Button>
    </form>
  );
};

export default SignUp;
