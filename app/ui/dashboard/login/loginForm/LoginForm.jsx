"use client";
import React from "react";
import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <form
      action={formAction}
      className="bg-bgSoft p-[50px] rounded-lg w-[500px] h-[500px] flex flex-col justify-center items-center gap-[30px]"
    >
      <h1 className="text-3xl font-bold">Login</h1>
      <input
        className="w-full p-[20px] border-2 border-solid border-[#2e374a] bg-bg rounded-lg"
        type="text"
        name="username"
        placeholder="username"
      />
      <input
        className="w-full p-[20px] border-2 border-solid border-[#2e374a] bg-bg rounded-lg"
        type="password"
        name="password"
        placeholder="password"
      />
      <button className="w-full p-[20px] bg-[#0f766e]" type="submit">
        Login
      </button>
      {state && state}
    </form>
  );
};

export default LoginForm;
