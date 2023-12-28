import Image from "next/image";
import React from "react";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div>
      <div className="relative bg-bgSoft p-[20px] mb-[20px]">
        <div>
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%]">
            <Image
              src={"/astronaut.png"}
              alt="Astronaut"
              fill
              className="object-contain opacity-[0.2]"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <span>🔥 Available now</span>
            <h3>How to use the new version of the admin dashboard?</h3>
            <span>Takes 4 minutes to learn</span>
            <p className="z-10">
              Lorem ipsum sit amet consectetur adipisicing elit. Reprenhenderit
              eius libero perspicatis recusandae possimus.
            </p>
            <button className="p-[10px] inline-flex items-center text-left gap-[10px] bg-[#5d57c9] rounded-lg cursor-pointer max-w-max">
              <MdPlayCircleFilled />
              Watch
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-bgSoft p-[20px]">
          <div className="flex flex-col gap-[20px]">
            <span className="font-bold text-[12px] text-textSoft">
              👨‍💻 Coming Soon
            </span>
            <h3>
              New server actions are available, partial pre-rendering is coming
              up!
            </h3>
            <span>Boost your productivity</span>
            <p>
              Lorem ipsum sit amet consectetur adipisicing elit. Reprenhenderit
              eius libero perspicatis recusandae possimus.
            </p>
            <button className="p-[10px] flex items-center gap-[10px] bg-[#5d57c9] rounded-lg cursor-pointer max-w-max">
              <MdReadMore />
              Learn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
