'use client'

import FormInput from "@/components/form-input";
import FormLabel from "@/components/form-label";
import { Button } from "@/components/ui/button";
import { Credentials, signIn } from "@/firebase/auth/auth";
import { useSubmitButton } from "@/hooks/useSubmitButton";
import { UserCredential } from "firebase/auth";
import { LogIn } from "lucide-react";
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
    <form action={onSubmit} className="flex flex-col gap-4">
      <FormLabel icon={<LogIn />}>SIGN IN</FormLabel>
      <FormInput name="email" labelText="EMAIL" id="email"/>
      <FormInput name="password" labelText="PASSWORD" id="password"/>
      <Button type="submit">SIGN IN</Button>
      <Button variant='link' type="button" asChild><Link href='/sign-up'>No accaunt?</Link></Button>
    </form>
  );
};

export default SignIn;
