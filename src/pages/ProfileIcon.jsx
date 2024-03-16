import React from "react";
import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

function ProfileIcon() {
  return (
    <div>
      <ul className=" flex gap-5">
        <li>
          <Link>
            <CgDetailsMore className=" bg-slate-600 px-2 py-2 rounded-lg font-bold text-4xl text-white hover:bg-[#086FA4] transition-colors" />
          </Link>
        </li>
        <li>
          <Link>
            <IoChatbubbleEllipsesSharp className=" bg-slate-600 px-2 py-2 rounded-lg font-bold text-4xl text-white hover:bg-[#086FA4] transition-colors" />
          </Link>
        </li>
        <li>
          <Link>
            <IoNotifications className=" bg-slate-600 px-2 py-2 rounded-lg font-bold text-4xl text-white hover:bg-[#086FA4] transition-colors" />
          </Link>
        </li>
        <li>
          <Link>
            <FaUserAlt className=" bg-slate-600 px-2 py-2 rounded-lg font-bold text-4xl text-white hover:bg-[#086FA4] transition-colors" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ProfileIcon;
