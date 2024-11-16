"use client"
import React from 'react';

interface props{
    text: string;
    func?: () => void;
    state?: React.ReactNode;
    classes?: string;
}

const Button = ({text = "Default", func, classes=""}:props) => {
  return (
    <button className={`px-5 py-2 hover:bg-gray-600 hover:text-slate-200 hover:py-[0.6rem] hover:px-[1.3rem] transition-transform font-mono text-white bg-gray-800 text-[1.1rem] rounded-lg ${classes}`} onClick={() => func && func()}>{text}</button>
  )
}

export default Button