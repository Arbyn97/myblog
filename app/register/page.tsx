"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function RegisterPage() {
  const [value, setValue] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    await signIn("credentials", {
      identifier: value,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <form onSubmit={submitHandler} className="space-y-4">
      <input
        type="text"
        placeholder="ایمیل یا شماره موبایل"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 w-full"
      />

      <button type="submit" className="bg-black text-white p-2 w-full">
        ثبت نام
      </button>
    </form>
  );
}
