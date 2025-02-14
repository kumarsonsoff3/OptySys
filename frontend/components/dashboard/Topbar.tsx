"use client";

import { useRouter } from "next/navigation";

import { logout } from "@/http";
import useUserStore from "@/stores/user";
import { toast } from "react-toastify";

export default function Topbar() {
  const router = useRouter();

  const { token } = useUserStore();

  async function handleLogout() {
    try {
      await Promise.resolve(await logout(token));
      toast.success("Logout successfully");
    } catch (err) {
      toast.error("Logout failed");
    } finally {
      router.push("/");
    }
  }

  return (
    <header className="flex flex-row items-center bg-white w-full h-14 p-5">
      <button
        onClick={handleLogout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </header>
  );
}
