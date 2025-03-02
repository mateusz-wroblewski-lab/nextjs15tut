"use client";

import React from "react";
import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/vaidations";
import { signInWithCredentials } from "@/lib/actions/auth";

const SignIn = () => {
      <AuthForm
        formType="SIGN_IN"
        schema={SignInSchema}
        defaultValues={{ 
          email: "", 
          password: "" 
        }}
        onSubmit={signInWithCredentials}
      />
};

export default SignIn;
