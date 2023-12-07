'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Credentials, signIn } from "@/firebase/auth/auth";
import { useSubmitButton } from "@/hooks/useSubmitButton";
import { UserCredential } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const SignIn = (props: Props) => {
  const onSuccess = () => {
    router.push('/home')
  }
  const {data, execute, loading, errors} = useSubmitButton<Credentials, UserCredential>(signIn, {onSuccess})
  const router = useRouter()
  const onSubmit = (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    execute({email, password})
  }
  return (
    <form action={onSubmit}>
      <Input name="email"/>
      <Input name="password"/>
      <Button type="submit">SIGN IN</Button>
      <Button variant='link' type="button" asChild><Link href='/sign-up'>No accaunt?</Link></Button>
    </form>
  );
};

export default SignIn;
