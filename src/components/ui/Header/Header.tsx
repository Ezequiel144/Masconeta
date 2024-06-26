export const dynamic = "force-dynamic";
export const revalidate = 0;

import Image from "next/image";
import ButtonHeader from "../ButtonHeader/ButtonHeader";
import ListMenuLink from "../ListMenuLink/ListMenuLink";
import ResponsiveHeader from "../ResponsiveHeader/ResponsiveHeader";

export default function Header() {
  return (
    <header className=" h-20 w-full bg-white flex items-center justify-between">
      <nav className="flex items-center justify-between mx-auto w-full px-8 h-full">
        <Image
          src="../../../../Logo.svg"
          width={250}
          height={50}
          className="w-auto h-auto"
          alt="logoSvg"
        />
        <ListMenuLink />
        <ButtonHeader />
        <ResponsiveHeader />
      </nav>
    </header>
  );
}
