import React from "react";
import tw from "twin.macro";
import Link from "./link";

export default function LandingSubHeader({ title, button, link }) {
  return (
    <div tw="flex items-center space-x-2 mb-8">
      <h3 tw="flex-1 text-xl font-bold">{title}</h3>
      <Link button secondary to={link} icon="right">
        {button}
      </Link>
    </div>
  );
}
