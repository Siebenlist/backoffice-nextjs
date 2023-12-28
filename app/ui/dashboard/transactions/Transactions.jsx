import Image from "next/image";
import React from "react";

const Transactions = () => {
  return (
    <div className="bg-bgSoft p-[20px] rounded-lg">
      <h2 className="mb-[20px] text-textSoft text-2xl font-bold">
        Latest Transactions
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Status</td>
            <td className="p-[10px]">Date</td>
            <td className="p-[10px]">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-[10px]">
              <div className="flex items-center gap-[10px]">
                <Image
                  src={"/noavatar.png"}
                  alt="Profile picture"
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td className="p-[10px]">
              <span className="rounded-[5px] p-[5px] text-[14px] bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td className="p-[10px]">14.02.2024</td>
            <td className="p-[10px]">$3.200</td>
          </tr>
          <tr>
            <td className="p-[10px]">
              <div className="flex items-center gap-[10px]">
                <Image
                  src={"/noavatar.png"}
                  alt="Profile picture"
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td className="p-[10px]">
              <span className="rounded-[5px] p-[5px] text-[14px] bg-[#f7737375]">
                Cancelled
              </span>
            </td>
            <td className="p-[10px]">14.02.2024</td>
            <td className="p-[10px]">$3.200</td>
          </tr>
          <tr>
            <td className="p-[10px]">
              <div className="flex items-center gap-[10px]">
                <Image
                  src={"/noavatar.png"}
                  alt="Profile picture"
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td className="p-[10px]">
              <span className="rounded-[5px] p-[5px] text-[14px] bg-[#afd6ee75]">
                Done
              </span>
            </td>
            <td className="p-[10px]">14.02.2024</td>
            <td className="p-[10px]">$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
