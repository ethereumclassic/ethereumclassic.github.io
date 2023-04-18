import React, { Fragment, useState } from "react";
import tw from "twin.macro";

import Button from "./button";
import Icon from "./icon";
import Link from "./link";

import { h4 as H4 } from "./linkedHeaders";
import FormattedDate from "./formattedDate";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

const colors = {
  // blue: tw`bg-blue-600`,
  white: tw`bg-shade-neutral`,
  orange: tw`bg-yellow-600`,
  // red: tw`bg-red-600`,
  // purple: tw`bg-purple-600`,
  // green: tw`bg-primary-dark`,
  red: tw`bg-red-600`,
  yellow: tw`bg-yellow-600`,
  green: tw`bg-green-600`,
  blue: tw`bg-blue-600`,
  indigo: tw`bg-indigo-600`,
  purple: tw`bg-purple-600`,
  pink: tw`bg-pink-600`,
  gray: tw`bg-gray-600`,
};

function GenericTimelineItem({
  title,
  date,
  dateText,
  color,
  icon,
  link,
  text,
  block,
  last,
}) {
  return (
    <div>
      <div tw="relative pb-8">
        {!last ? (
          <span
            tw="absolute top-4 left-4 rtl:left-auto rtl:right-4 -ml-px h-full w-0.5 bg-shade-lighter"
            aria-hidden="true"
          />
        ) : null}
        <div tw="relative flex space-x-3">
          <div>
            <span
              css={[
                tw`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-backdrop-light bg-secondary-dark`,
                colors[color],
              ]}
            >
              <Icon
                tw="h-5 w-5 text-shade-lightest"
                icon={icon}
                aria-hidden="true"
              />
            </span>
          </div>
          <div tw="flex-1 pt-1.5">
            <div tw="flex space-x-4">
              <H4 tw="!mt-0 flex-1">
                {link ? (
                  <Link to={link} showExternal>
                    {title}
                  </Link>
                ) : (
                  title
                )}
              </H4>
              <div tw="text-sm text-shade-neutral">
                <div tw="flex items-center space-x-3">
                  {block && (
                    <Link
                      iconLeft="block"
                      to={`https://blockscout.com/etc/mainnet/block/${block.replace(
                        /\D/g,
                        ""
                      )}/transactions`}
                      tw="inline-flex items-center space-x-2 !text-shade-neutral !font-normal !no-underline hover:!underline"
                    >
                      {block}
                    </Link>
                  )}
                  {dateText && <span>{dateText}</span>}
                  {date && <FormattedDate date={date} />}
                </div>
              </div>
            </div>
            <p tw="text-sm text-shade-neutral">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GenericTimeline({ items }) {
  const {
    ui: { timeline },
  } = useGlobals();
  const [reversed, setReversed] = useState(false);
  const ordered = !reversed ? items : [...items].reverse();
  return (
    <>
      <div tw="p-6 bg-backdrop-light rounded-md relative shadow">
        <div tw="absolute right-0 rtl:left-0 rtl:right-auto -top-12">
          <Button
            primary
            icon={reversed ? "sortUp" : "sortDown"}
            onClick={() => {
              setReversed(!reversed);
            }}
          >
            {reversed ? timeline.reversed : timeline.chronological}
          </Button>
        </div>
        <div tw="flow-root overflow-hidden">
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
