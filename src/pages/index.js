import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import PushNotificationPermission from "@/components/PushNotificationPermission";
import BottomNavigation from "@/components/BottomNavigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 bg-[#EBE9E9] ${inter.className}`}
      >
        <button
          className="flex text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 w-48 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-600 to-gray-200 rounded-2xl hover:translate-y-px "
          style={{
            WebkitBoxShadow: "0px 10px 13px -7px #000000",
            boxShadow: "0px 10px 13px -7px #000000",
          }}
        >
          Absen
        </button>
      </main>
      <PushNotificationPermission />
      <BottomNavigation />
    </div>
  );
}
