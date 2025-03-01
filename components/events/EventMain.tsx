import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import ROUTES from "@/constants/routes";

const EventMain = () => {
  return (
    <section className="bg-[url(/banners/wco2024.jpg)] bg-cover rounded-xl">
      <div className="event-gradient rounded-xl">
        <div className="flex flex-col gap-5 p-8  text-white">
          <h1 className="h1-bold">Date</h1>
          <h2 className="h2-bold">Title</h2>
          <h3 className="h3-semibold">Subtitle</h3>
          <p className="">Location</p>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row gap-3 px-5 py-5">
          <Button
            className="bg-transparent  text-light-900  min-h-[41px] rounded-lg border border-white selection:px-4 py-3 shadow-none"
            asChild
          >
            <Link href={ROUTES.PROGRAMME} target="_blank">
              <Image
                src="/icons/account.svg"
                alt="account"
                width={20}
                height={20}
              />
              <span>Program</span>
            </Link>
          </Button>

          <Button
            className="bg-transparent text-light-900 min-h-[41px] rounded-lg border border-white px-4 py-3 shadow-none"
            asChild
          >
            <Link href={ROUTES.CONDITIONS} target="_blank">
              <Image
                src="/icons/sign-up.svg"
                alt="signup"
                width={20}
                height={20}
              />
              <span>Warunki uczestnictwa</span>
            </Link>
          </Button>

          <Button
            className="primary-gradient  text-light-900 h3-bold min-h-[41px] rounded-lg px-20 py-3 shadow-none"
            asChild
          >
            <Link href={ROUTES.REGISTRATION} target="_blank">
              <Image
                src="/icons/sign-up.svg"
                alt="signup"
                width={20}
                height={20}
              />
              <span>Rejestracja</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventMain;
