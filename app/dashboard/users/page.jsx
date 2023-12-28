import { deleteUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className="bg-bgSoft p-[20px] rounded-lg mt-[20px]">
      <div className="flex items-center justify-between">
        <Search placeholder={"Search for a user"} />
        <Link href={"/dashboard/users/addUser"}>
          <button className="p-[10px] bg-[#5d57c9] cursor-pointer rounded-lg">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Email</td>
            <td className="p-[10px]">Created At</td>
            <td className="p-[10px]">Role</td>
            <td className="p-[10px]">Status</td>
            <td className="p-[10px]">Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td className="p-[10px]">
                  <div className="flex gap-[10px] items-center">
                    <Image
                      src={user.img || "/noavatar.png"}
                      alt="Profile picture "
                      width={40}
                      height={40}
                      className="object-fit rounded-full aspect-square"
                    />
                    {user.username}
                  </div>
                </td>
                <td className="p-[10px]">{user.email}</td>
                <td className="p-[10px]">
                  {user.createdAt?.toString().split(" ", 4).join(" - ")}
                </td>
                <td className="p-[10px]">
                  {user.isAdmin ? "Admin" : "Client"}
                </td>
                <td className="p-[10px]">
                  {user.isActive ? "Active" : "Not active"}
                </td>
                <td className="p-[10px]">
                  <div className="flex gap-[10px]">
                    <Link href={`/dashboard/users/${user.id}`}>
                      <button className="py-[5px] px-[10px] rounded-lg bg-[#0f766e]">
                        View
                      </button>
                    </Link>
                    <form action={deleteUser}>
                      <input type="hidden" name="id" value={user.id} />
                      <button className="py-[5px] px-[10px] rounded-lg bg-[#dc2626]">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
