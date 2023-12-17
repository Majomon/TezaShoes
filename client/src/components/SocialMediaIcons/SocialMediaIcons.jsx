"use client";
import Link from "next/link";

function SocialMediaIcons({ name, action, to, icon }) {
  const openEmailClient = () => {
    window.location.href = `mailto:asdasdasd@asdasdasd.com`;
  };

  return (
    <div className="flex items-center gap-2">
      {action === "email" ? (
        <div
          onClick={openEmailClient}
          className="w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer"
        >
          {icon}
        </div>
      ) : (
        <Link href={to} target="_blank">
          <div className="w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center">
            {icon}
          </div>
        </Link>
      )}
      <h4 className="text-sm">{name}</h4>
    </div>
  );
}

export default SocialMediaIcons;
