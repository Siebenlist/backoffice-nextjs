import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex gap-[20px] p-[20px] bg-bgSoft rounded-lg cursor-pointer w-full hover:bg-[#2e374a]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-[20px]">
        <span>Total Users</span>
        <span className="text-[24px] font-bold">10.273</span>
        <span className="text-[14px] font-semibold">
          <span className="text-[#a3e635] mr-1">12%</span>
          more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
