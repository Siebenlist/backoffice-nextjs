import { updateUser } from "@/app/lib/actions";
import { fetchSingleUser } from "@/app/lib/data";
import Image from "next/image";
import React from "react";

const UserDetails = async ({ params }) => {
  const { id } = params;
  const user = await fetchSingleUser(id);

  return (
    <div className="flex gap-[50px] mt-[20px]">
      <div className="flex-1 h-max bg-bgSoft p-[20px] font-bold rounded-lg text-textSoft">
        <div className="w-full h-[300px] relative rounded-lg overflow-hidden mb-[20px]">
          <Image src={user.img || "/noavatar.png"} alt="Profile picture" fill />
        </div>
        {user.username}
      </div>
      <div className="flex-[3] bg-bgSoft p-[20px] rounded-lg">
        <form action={updateUser} className="flex flex-col">
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input
            className="p-[20px] border-2 border-solid border-[#2e374a] my-[10px] bg-bg rounded-lg"
            type="text"
            name="username"
            placeholder={user.username}
          />
          <label>Email</label>
          <input
            className="p-[20px] border-2 border-solid border-[#2e374a] my-[10px] bg-bg rounded-lg"
            type="email"
            name="email"
            placeholder={user.email}
          />
          <label>Password</label>
          <input
            className="p-[20px] border-2 border-solid border-[#2e374a] my-[10px] bg-bg rounded-lg"
            type="password"
            name="password"
          />
          <label>Phone</label>
          <input
            className="p-[20px] border-2 border-solid border-[#2e374a] my-[10px] bg-bg rounded-lg"
            type="phone"
            name="phone"
            placeholder={user.phone || "Phone number"}
          />
          <label>Address</label>
          <textarea
            className="p-[20px] border-2 border-solid border-[#2e374a] my-[10px] bg-bg rounded-lg"
            type="text"
            name="address"
            placeholder={user.address || "Address"}
          />
          <label>Is Admin?</label>
          <select
            className="p-[20px] border-2 border-solid border-[#2e374a] my-[10px] bg-bg rounded-lg"
            name="isAdmin"
            id="isAdmin"
          >
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select
            className="p-[20px] border-2 border-solid border-[#2e374a] my-[10px] bg-bg rounded-lg"
            name="isActive"
            id="isActive"
          >
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button
            type="submit"
            className="p-[20px] bg-[#0f766e] rounded-lg font-bold mt-3"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
