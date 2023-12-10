'use client'

import FormInput from "@/components/form-input";
import FormLabel from "@/components/form-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Credentials, signUp } from "@/firebase/auth/auth";
import { useSubmitButton } from "@/hooks/useSubmitButton";
import { UserCredential } from "firebase/auth";
import { LogIn } from "lucide-react";
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
    <form action={onSubmit} className="flex flex-col gap-4">
      <FormLabel icon={<LogIn />}>SIGN UP</FormLabel>
      <p>Create new account:</p>
      <FormInput name="email" labelText="YOUR EMAIL" id="email"/>
      <FormInput name="password" labelText="YOUR PASSWORD" id="password"/>
      <Button type="submit">SIGN UP</Button>
    </form>
  );
};

export default SignUp;
