import Image from "next/image";
import Link from "next/link";
import AuthCheck from "./AuthCheck";
import { SignInButton, SignOutButton } from "./ui/buttons";

export default function NavMenu() {
  return (
    <nav className="flex justify-between w-full border-b border-gray-700">
      <Link href={"/"} className="flex justify-center items-center">
        <Image
          src={"/space.png"}
          width={200}
          height={200}
          alt="Logo by Gert van Duinen"
          priority
        />
      </Link>
      <ul className="md:flex items-center justify-end w-full gap-8 mr-16 uppercase transition-all hidden">
        <li>
          <Link href={"/about"} className="link-border text-sm md:text-lg">
            About
          </Link>
        </li>
        <li>
          <Link href={"/blog"} className="link-border text-sm md:text-lg">
            Blog
          </Link>
        </li>
        <li>
          <Link href={"/users"} className="link-border text-sm md:text-lg">
            Users
          </Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  );
}
