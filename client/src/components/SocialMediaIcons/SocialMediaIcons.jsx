"use client";
import Link from "next/link";

function SocialMediaIcons({ name, action, to, icon }) {
  const openEmailClient = () => {
    window.location.href = `mailto:infotezashoes@gmail.com`;
  };

  return (
    <div className="flex items-center gap-2">
      {action === "email" ? (
        <div className="flex rounded-full justify-center items-center gap-x-2 cursor-pointer">
          <button className="w-9 h-9 bg-gray-900 flex justify-center items-center rounded-full" onClick={openEmailClient}>
            {icon}
          </button>
          {name && <h4 className="text-sm">{name}</h4>}
        </div>
      ) : (
        <Link href={to} target="_blank">
          <div className="flex rounded-full justify-center items-center gap-x-2 cursor-pointer">
            <button className="w-9 h-9 bg-gray-900 flex justify-center items-center rounded-full">
              {icon}
            </button>
            {name && <h4 className="text-sm">{name}</h4>}
          </div>
        </Link>
      )}
    </div>
  );
}

export default SocialMediaIcons;
