import ROUTES from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const EventCard = ({
  id,
  date,
  title,
  subtitle,
  location,
  imagebg,
  film,
  photos,
}: Events) => (
  <section
    className="bg-cover bg-center rounded-xl mt-4"
    style={{ backgroundImage: `url(${imagebg})` }}
  >
    <div className="event-gradient rounded-xl">
      <div className="flex flex-col gap-5 px-8 py-3 text-white">
        <h1 className="h1-bold !text-[30px]">{date}</h1>
        <h2 className="h2-bold !text-[40px] !leading-[40px]">{title}</h2>
        <h3 className="h3-semibold">{subtitle}</h3>
        <p className="paragraph-regular !text-[14px]">{location}</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-evenly lg:flex-row gap-3 py-5">
        <Button
          className="bg-black/30 text-light-900  min-h-[41px] w-[110px] rounded-lg border border-white selection:px-4 py-3 shadow-none"
          asChild
        >
          <Link href={film} target="_blank">
            <Image
              src="/icons/account.svg"
              alt="account"
              width={20}
              height={20}
            />
            <span>Film</span>
          </Link>
        </Button>

        <Button
          className="bg-black/30 text-light-900 min-h-[41px] rounded-lg border border-white px-4 py-3 shadow-none"
          asChild
        >
          <Link href={photos} target="_blank">
            <Image
              src="/icons/sign-up.svg"
              alt="signup"
              width={20}
              height={20}
            />
            <span>Zdjęcia</span>
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default EventCard;
