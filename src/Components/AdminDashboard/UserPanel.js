import React from "react";
import { MdLogout } from "react-icons/md";

function UserPanel() {
  return (
    <div className="flex justify-around  flex items-center cursor-pointer p-1 hover:bg-gray-400 rounded-full ">
      <div className="flex items-center">
        <img
          className="h-10 w-10 rounded-full"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          alt=""
        />
        <p className="text-sm font-medium text-slate-900 px-2">Samsu</p>
      </div>
      <div className="flex justify-between ">
        <button className="text-white">
          <MdLogout className="h-6 w-6 text-red-600" />
        </button>
      </div>
    </div>
  );
}

export default UserPanel;
