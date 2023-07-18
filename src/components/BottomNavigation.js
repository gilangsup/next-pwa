import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";

const BottomNavigation = () => {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-slate-500 shadow-lg">
      <ul className="flex justify-around py-2">
        <li className="text-white">
          <Link href="/">
            <p className="flex flex-col items-center">
              <AiFillHome size={25} />
              Home
            </p>
          </Link>
        </li>
        <li className="text-white">
          <Link href="/profile">
            <p className="flex flex-col items-center">
              <CgProfile size={25} />
              Profile
            </p>
          </Link>
        </li>
        <li className="text-white">
          <Link href="/success">
            <p className="flex flex-col items-center">
              <BiLogOut size={25} />
              Log Out
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigation;
