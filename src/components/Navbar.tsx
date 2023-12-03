import { satoshiBold } from "@/components/utils/font";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-[10vh] flex items-center">
      <Link
        href="/"
        className={`${satoshiBold.className} text-2xl tracking-[4px]`}
      >
        :&#x2f;&#x2f;m
      </Link>
    </nav>
  );
};

export default Navbar;
