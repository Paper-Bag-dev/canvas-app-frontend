"use client"
import React, { useState } from "react";
import Button from "../common/Button/Button";

interface props{
  visible: boolean;
  func: () => void;
}

const InsertCard = ({visible = false, func}:props) => {
  const [mkdwn, setMkDwn] = useState("");

  return (
    <div onClick={() => func()} className={`fixed hover:cursor-pointer flex justify-center items-center bg-black/60 z-[100] w-[100%] h-full ${visible? "" : "invisible"}` }>
      <div className="w-[30rem] h-[40rem] z-[101] bg-white rounded-lg flex flex-col items-center hover:cursor-default" onClick={(e) => e.stopPropagation()}>
        <span className="flex justify-center w-full py-4 my-2 font-mono text-2xl font-semibold border-b-2 border-gray-500 ">Create your post</span>

        <textarea value={mkdwn} onChange={(e) => setMkDwn(e.target.value)} placeholder="Enter Markdown" className="w-[29rem] border-2 border-gray-300 focus:outline-none h-full">
        </textarea>
        <Button classes=" w-[29rem] h-[3.4rem] my-2" text="Insert Pin" />
      </div>
    </div>
  );
};

export default InsertCard;
