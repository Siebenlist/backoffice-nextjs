import { addProduct } from "@/app/lib/actions";
import React from "react";

const AddProductPage = () => {
  return (
    <div className="bg-bgSoft p-[20px] rounded-lg mt-[20px]">
      <form action={addProduct} className="flex flex-wrap justify-between">
        <input
          className="p-[20px] w-[45%] mb-[30px] border-2 border-solid border-[#2e374a] bg-bg rounded-lg"
          type="text"
          placeholder="title"
          name="title"
          required
        />
        <select
          className="w-[45%] p-[20px] rounded-lg mb-[30px] border-2 border-solid border-[#2e374a] bg-bg"
          name="cat"
          id="cat"
        >
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          className="p-[20px] w-[45%] mb-[30px] border-2 border-solid border-[#2e374a] bg-bg rounded-lg"
          type="number"
          placeholder="price"
          name="price"
        />
        <input
          className="p-[20px] w-[45%] mb-[30px] border-2 border-solid border-[#2e374a] bg-bg rounded-lg"
          type="number"
          placeholder="stock"
          name="stock"
        />
        <input
          className="p-[20px] w-[45%] mb-[30px] border-2 border-solid border-[#2e374a] bg-bg rounded-lg"
          type="text"
          placeholder="color"
          name="color"
        />
        <input
          className="p-[20px] w-[45%] mb-[30px] border-2 border-solid border-[#2e374a] bg-bg rounded-lg"
          type="text"
          placeholder="size"
          name="size"
        />
        <textarea
          className="w-full p-[20px] mb-[30px] border-2 rounded-lg border-solid border-[#2e374a] bg-bg"
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
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

export default AddProductPage;
