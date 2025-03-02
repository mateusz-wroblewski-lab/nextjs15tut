"use client";

import React from "react";
import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/vaidations";
import { signUp } from "@/lib/actions/auth";

const SignUp = () => (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ 
        email: "", 
        password: "", 
        name: "", 
        username: "",
      }}
      onSubmit={signUp}
    />
  );

export default SignUp;
