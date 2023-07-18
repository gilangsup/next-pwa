import React from "react";
import Image from "next/image";
import BottomNavigation from "@/components/BottomNavigation";

const index = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image src="/ontime.jpg" width={250} height={300} alt="Image" />
      <div className="text-center">
        <h1 className="font-bold text-2xl">ABSEN BERHASIL</h1>
        <p className="text-xl mt-1 text-slate-500">Hai Gilang Suprobo<br/> Kamu berhasil absen masuk<br/> 18 Juli 2023 07:30</p>
      </div>
      <BottomNavigation/>
    </div>
  );
};

export default index;
