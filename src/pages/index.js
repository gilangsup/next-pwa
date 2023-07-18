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
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      ></main>
      <PushNotificationPermission />
      <BottomNavigation />
    </div>
  );
}
