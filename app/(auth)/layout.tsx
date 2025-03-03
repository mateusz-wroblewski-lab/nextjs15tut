import React from "react";
import Image from "next/image";
import { ReactNode } from "react";
// import { auth } from "@/auth";

import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  // const session = await auth();

  // if (session) redirect("/");

  return (
    <main className="flex min-h-screen items-center justify-center primary-gradient dark:event-gradient px-4 py-10">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark100_light900">Join</h1>
            <p className="paragraph-regular text-dark500_light400">
              to get sth.
            </p>
          </div>
          <Image
            src="/images/site-logo-dark.svg"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        {children}
        <p>
          <SocialAuthForm />
        </p>
      </section>
    </main>
  );
};

export default AuthLayout;
