import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fetchProducts } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/actions";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);

  return (
    <div>
      {" "}
      <div className="bg-bgSoft p-[20px] rounded-lg mt-[20px]">
        <div className="flex items-center justify-between">
          <Search placeholder={"Search for a product"} />
          <Link href={"/dashboard/products/addProduct"}>
            <button className="p-[10px] bg-[#5d57c9] cursor-pointer rounded-lg">
              Add New
            </button>
          </Link>
        </div>
        <table className="w-full mt-5">
          <thead>
            <tr>
              <td className="p-[10px]">Title</td>
              <td className="p-[10px]">Description</td>
              <td className="p-[10px]">Price</td>
              <td className="p-[10px]">Created At</td>
              <td className="p-[10px]">Stock</td>
              <td className="p-[10px]">Action</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td className="p-[10px]">
                    <div className="flex gap-[10px] items-center">
                      <Image
                        src={product.img || "/noproduct.jpg"}
                        alt="Profile picture "
                        width={40}
                        height={40}
                        className="object-fit rounded-full"
                      />
                      {product.title}
                    </div>
                  </td>
                  <td className="p-[10px]">{product.desc}</td>
                  <td className="p-[10px]">{product.price}</td>
                  <td className="p-[10px]">
                    {product.createdAt?.toString().split(" ", 4).join(" - ")}
                  </td>
                  <td className="p-[10px]">{product.stock}</td>
                  <td className="p-[10px]">
                    <div className="flex gap-[10px]">
                      <Link href={`/dashboard/products/${product.id}`}>
                        <button className="py-[5px] px-[10px] rounded-lg bg-[#0f766e]">
                          View
                        </button>
                      </Link>
                      <form action={deleteProduct}>
                        <input type="hidden" name="id" value={product.id} />
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
    </div>
  );
};

export default ProductsPage;
