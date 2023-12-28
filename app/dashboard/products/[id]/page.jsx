import { updateProduct } from "@/app/lib/actions";
import { fetchSingleProduct } from "@/app/lib/data";
import Image from "next/image";
import React from "react";

const ProductDetails = async ({ params }) => {
  const { id } = params;
  const product = await fetchSingleProduct(id);

  return (
    <div className="flex gap-[50px] mt-[20px]">
      <div className="flex-1 h-max bg-bgSoft p-[20px] font-bold rounded-lg text-textSoft">
        <div className="w-full h-[300px] relative rounded-lg overflow-hidden mb-[20px]">
          <Image
            src={product.img || "/noavatar.png"}
            alt="Profile picture"
            fill
          />
        </div>
        {product.title}
      </div>
      <div className="flex-[3] bg-bgSoft p-[20px] rounded-lg">
        <form action={updateProduct} className="flex flex-col">
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input
            className="p-[20px] border-2 border-solid border-[#2e374a] my-[10px] bg-bg rounded-lg"
            type="text"
            name="title"
            placeholder={product.title}
          />
          <label>Price</label>
          <input
            className="p-[20px] border-2 border-solid border-[#2e374a] my-[10px] bg-bg rounded-lg"
            type="number"
            name="number"
            placeholder={product.price}
          />
          <label>Stock</label>
          <input
            className="p-[20px] border-2 border-solid border-[#2e374a] my-[10px] bg-bg rounded-lg"
            type="number"
            name="number"
            placeholder={product.stock}
          />
          <label>Color</label>
          <input
            className="p-[20px] border-2 border-solid border-[#2e374a] my-[10px] bg-bg rounded-lg"
            type="text"
            name="text"
            placeholder={product.color}
          />
          <label>Size</label>
          <input
            className="p-[20px] border-2 border-solid border-[#2e374a] my-[10px] bg-bg rounded-lg"
            type="text"
            name="text"
            placeholder={product.size}
          />
          <label>Category</label>
          <select
            className="p-[20px] border-2 border-solid border-[#2e374a] my-[10px] bg-bg rounded-lg"
            name="cat"
            id="cat"
          >
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="16"
            placeholder="Description"
            className="p-[20px] border-2 border-solid border-[#2e374a] my-[10px] bg-bg rounded-lg"
          ></textarea>
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

export default ProductDetails;
