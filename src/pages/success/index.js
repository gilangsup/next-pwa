import React from "react";
import Image from "next/image";
import BottomNavigation from "@/components/BottomNavigation";
import Link from "next/link";

const index = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image src="/ontime.jpg" width={250} height={300} alt="Image" />
      <div className="text-center">
        <h1 className="font-bold text-2xl">ABSEN BERHASIL</h1>
        <p className="text-xl mt-1 text-slate-500">
          Hai Gilang Suprobo
          <br /> Kamu berhasil absen masuk
          <br /> 18 Juli 2023 07:30
        </p>
      </div>
      <button className="rounded-full bg-slate-500 w-1/5 text-white mt-4 h-[40px]">
        <Link href="/">Kembali</Link>
      </button>
      <BottomNavigation />
    </div>
  );
};

export default index;
