import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({logo}) => {
  console.log("🚀 ~ Logo ~ logo:", logo)
  return (
    <figure className={`flex justify-center items-center`}>
      <Link href="/" className="">
        {/* <Image src={logo?.url ? logo?.url : `/svg/logo.svg`} alt="logo" width={126} height={74} className="w-16 md:w-[126px]"/> */}
      </Link>
    </figure>
  );
};

export default Logo;
