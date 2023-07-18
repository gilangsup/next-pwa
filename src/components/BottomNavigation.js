import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";

const BottomNavigation = () => {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-gray-900 shadow-lg">
      <ul className="flex justify-around py-2">
        <li className="text-white">
          <Link href="/">
            <p className="flex flex-col items-center">
              <AiFillHome size={30} />
              Home
            </p>
          </Link>
        </li>
        <li className="text-white">
          <Link href="/about">
            <p className="flex flex-col items-center">
              <CgProfile size={30} />
              Profile
            </p>
          </Link>
        </li>
        <li className="text-white">
          <Link href="/contact">
            <p className="flex flex-col items-center">
              <BiLogOut size={30} />
              Log Out
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigation;
