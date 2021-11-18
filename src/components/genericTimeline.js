import React, { Fragment, useState } from "react";
import tw from "twin.macro";
import Json from "./json";

import Button from "./button";
import Icon from "./icon";
import Link from "./link";

import { h4 as H4 } from "./linkedHeaders";

const colors = {
  blue: tw`bg-blue-600`,
  white: tw`bg-gray-600`,
  orange: tw`bg-yellow-600`,
  red: tw`bg-red-600`,
  purple: tw`bg-purple-600`,
  green: tw`bg-green-600`,
};

function GenericTimelineItem({ title, date, color, icon, link, text, last }) {
  return (
    <div>
      <div tw="relative pb-8">
        {!last ? (
          <span
            tw="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
        ) : null}
        <div tw="relative flex space-x-3">
          <div>
            <span
              css={[
                tw`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white bg-indigo-600`,
                colors[color],
              ]}
            >
              <Icon tw="h-5 w-5 text-white" icon={icon} aria-hidden="true" />
            </span>
          </div>
          <div tw="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
            <div>
              <H4 tw="!mt-0">
                <Link to={link} showExternal>
                  {title}
                </Link>
              </H4>
              <p tw="text-sm text-gray-500">{text}</p>
            </div>
            <div tw="text-right text-sm whitespace-nowrap text-gray-500">
              <time dateTime={date}>{date}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GenericTimeline({ items }) {
  const [reversed, setReversed] = useState(false);
  const ordered = !reversed ? items : [...items].reverse();
  return (
    <>
      <div tw="text-right">
        <Button
          primary
          onClick={() => {
            setReversed(!reversed);
          }}
        >
          {!reversed ? "Oldest First" : "Newst First"}
        </Button>
      </div>
      <div tw="p-10 bg-white rounded-md shadow">
        <div tw="flow-root">
          {ordered.map((item, i) => (
            <GenericTimelineItem
              key={item.key}
              last={i === items.length - 1}
              {...item}
            />
          ))}
        </div>
      </div>
    </>
  );
}
