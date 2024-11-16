"use client";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import Image from "next/image";
import { Logo } from "@/public/assetManager";
import Button from "../Button/Button";
import InsertCard from "@/components/Popup/InsertCard";

const Navbar = () => {
  const [insertCard, setInsertCard] = useState(false); 
  return (
    <>
      <InsertCard visible={insertCard} func={() => setInsertCard(false)} />
    <div className="fixed z-[99] flex items-center justify-between w-full h-16 px-4 transition-all duration-300 bg-gradient-to-b from-gray-400 via-gray-100 to-transparent hover:from-[#adadad] hover:h-20">

      <Link className=" hover:text-gray-500" href={"/stats"}>
        <GiHamburgerMenu className="w-6 h-6" />
      </Link>

      <Link
        href={"/board"}
        className="flex items-end font-mono text-2xl font-bold"
        >
        <Image className="mr-3 h-9 w-9" src={Logo} alt="Stickly Logo" /> Board
      </Link>

      <Button func={() => setInsertCard(true)} text="Post" />
    </div>
        </>
  );
};

export default Navbar;
