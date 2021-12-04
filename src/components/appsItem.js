import React from "react";
import tw from "twin.macro";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import FormattedDate from "./formattedDate";

export default function AppsItem({ item }) {
  const { name, date, image } = item;
  // TODO color based on tag
  return (
    <div tw="h-20 flex shadow-sm rounded-md overflow-hidden text-primary-darkest bg-primary-lightest items-center">
      {image && (
        <GatsbyImage
          image={getImage(image)}
          alt={name}
          tw="h-20 w-20 bg-white"
        />
      )}
      <div tw="p-2 pl-4">
        <div tw="text-lg">{name}</div>
        <FormattedDate date={date} />
      </div>
    </div>
  );
}
