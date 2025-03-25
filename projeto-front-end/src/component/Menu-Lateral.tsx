import React from "react";
import { FaHome, FaBars } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
  return (
    <div className="z-0 w-16 h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center shadow-md fixed top-0 left-0">
      <div className="mt-4 p-2 text-gray-700 hover:text-blue-500 cursor-pointer">
        <FaBars size={24} />
      </div>
      <div className="mt-8 p-2 text-gray-700 hover:text-blue-500 cursor-pointer">
        <button onClick={() => navigate('/')}><FaHome size={24} /></button>
      </div>
    </div>
  );
}
