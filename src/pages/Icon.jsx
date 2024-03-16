import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { MdGroupWork } from "react-icons/md";
import { IoGameController } from "react-icons/io5";

function Icon() {
  return (
    <div>
      <ul className=" flex gap-20">
        <li>
          <Link to="/">
            <FaHome className=" font-bold text-3xl  hover:text-[#086FA4] translate-x-1" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <CiVideoOn className=" font-bold text-3xl hover:text-[#086FA4] translate-x-1" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <MdGroupWork className=" font-bold text-3xl hover:text-[#086FA4] translate-x-1" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <IoGameController className=" font-bold text-3xl hover:text-[#086FA4] translate-x-1" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Icon;
