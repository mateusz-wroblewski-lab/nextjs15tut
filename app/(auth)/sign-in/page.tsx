"use client";

import React from "react";
import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/vaidations";

const SignIn = () => (
  <AuthForm
    formType="SIGN_IN"
    schema={SignInSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={(data) => Promise.resolve({ success: true, data })}
  />
);

export default SignIn;
