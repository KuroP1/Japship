import React from "react";
import Link from "next/link";

export const NavLink = ({ content, url }: { content: string; url: string }) => {
  return (
    <Link
      href={url}
      className="text-[18px] p-3 px-8 rounded-lg hover:bg-teal-700"
    >
      {content}
    </Link>
  );
};
