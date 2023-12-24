"use client";
import { useEffect } from "react";
import FormLogin from "./FormLogin";
import { useRouter } from "next/navigation";

function MainLogin({ url }) {
  const router = useRouter();
  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if (userData) {
      router.push("/account");
    }
  }, []);

  return (
    <div className="w-full h-full border rounded-xl flex">
      <img
        src="/login/Login1.jpg"
        alt="Login"
        className="w-5/12 h-full rounded-tl-xl rounded-bl-xl "
      />
      <div className="w-7/12 h-full ">
        <FormLogin url={url} />
      </div>
    </div>
  );
}

export default MainLogin;
