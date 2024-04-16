import Image from "next/image";
import ButtonHeader from "../ButtonHeader/ButtonHeader";
import ListMenuLink from "../ListMenuLink/ListMenuLink";

export default function Header() {
  return (
    <header className=" h-20 w-full bg-white flex items-center justify-between">
      <nav className="flex items-center justify-between mx-auto w-full max-w-[1366px] h-full px-4">
        <Image
          src="../../../../Logo.svg"
          width={250}
          height={50}
          alt="logoSvg"
        />
        <ListMenuLink />
        <ButtonHeader />
      </nav>
    </header>
  );
}