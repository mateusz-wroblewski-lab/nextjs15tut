import Image from "next/image";
import Link from "next/link";
import React from "react";

import MobileNavigation from "./MobileNavigation";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full p-4 shadow-light-300 dark:shadow-none px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo-dark.svg"
          alt="Fundacja Logo"
          width={35}
          height={35}
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 ">
          Fundacja<span className="text-primary-500">&nbsp;Wideochirurgii</span>
        </p>
      </Link>
      <p className="max-sm:hidden">Global Search</p>

      <div className="flex-between gap-5">
        <Theme />

        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
