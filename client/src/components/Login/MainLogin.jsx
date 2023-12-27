"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FormLogin from "./FormLogin";

function MainLogin({ url }) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const userData = localStorage.getItem("userData");

  const images = ["/login/Login1.jpg", "/login/Login2.jpg"];

  const handleSuccessfulLogin = () => {
    if (userData) {
      router.push("/");
    }
  };

  useEffect(() => {
    handleSuccessfulLogin();

    // Cambia la imagen cada 2 segundos
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full border rounded-xl flex">
      <div className="w-5/12 h-full relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`img${index + 1}`}
            className={`w-full h-full rounded-tl-xl rounded-bl-xl absolute ${
              index === currentImageIndex
                ? "opacity-100 animate-fadeInLogin"
                : "opacity-0 animate-fadeOutLogin"
            } `}
          />
        ))}
      </div>

      <div className="w-7/12 h-full relative">
        <FormLogin url={url} />
      </div>
    </div>
  );
}

export default MainLogin;
