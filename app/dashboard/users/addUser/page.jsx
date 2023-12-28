import { addUser } from "@/app/lib/actions";
import React from "react";

const AddUsersPage = () => {
  return (
    <div className="bg-bgSoft p-[20px] rounded-lg mt-[20px]">
      <form action={addUser} className="flex flex-wrap justify-between">
        <input
          className="p-[20px] w-[45%] mb-[30px] border-2 border-solid border-[#2e374a] bg-bg rounded-lg"
          type="text"
          placeholder="username"
          name="username"
          required
        />
        <input
          className="p-[20px] w-[45%] mb-[30px] border-2 border-solid border-[#2e374a] bg-bg rounded-lg"
          type="email"
          placeholder="email"
          name="email"
          required
        />
        <input
          className="p-[20px] w-[45%] mb-[30px] border-2 border-solid border-[#2e374a] bg-bg rounded-lg"
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input
          className="p-[20px] w-[45%] mb-[30px] border-2 border-solid border-[#2e374a] bg-bg rounded-lg"
          type="phone"
          placeholder="phone"
          name="phone"
          required
        />
        <select
          className="w-[45%] p-[20px] rounded-lg mb-[30px] border-2 border-solid border-[#2e374a] bg-bg"
          name="isAdmin"
          id="isAdmin"
        >
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select
          className="w-[45%] p-[20px] rounded-lg mb-[30px] border-2 border-solid border-[#2e374a] bg-bg"
          name="isActive"
          id="isActive"
        >
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          className="w-full p-[20px] mb-[30px] border-2 border-solid border-[#2e374a] bg-bg rounded-lg"
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button
          type="submit"
          className=" py-[10px] px-[20px] bg-[#0f766e] rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUsersPage;
