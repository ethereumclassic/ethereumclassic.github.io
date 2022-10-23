import React, { Fragment, useState } from "react";
import "twin.macro";
import { Disclosure } from "@headlessui/react";

import isSSR from "../utils/isSSR";

import Md from "./markdownDynamic";
import Icon from "./icon";
import Button from "./button";

// TODO noscript show all

function Question({ item: { question, answer }, showAll }) {
  const [defaultShowAll] = useState(showAll);
  const [showing, setShowing] = useState(defaultShowAll);
  // if dsa is true, we are in SSR mode
  const visible = defaultShowAll || showAll ? showAll : showing;
  return (
    <div tw="py-5">
      <div
        tw="cursor-pointer flex items-center space-x-2 text-left text-shade-dark hover:text-shade-darkest text-lg font-bold"
        onClick={() => {
          setShowing(!showing);
        }}
      >
        <div>
          <Icon icon={showing ? "down" : "right"} tw="w-5 h-5" />
        </div>
        <div>{question}</div>
        {/* {JSON.stringify({ visible, showAll, showing, defaultShowAll })} */}
      </div>
      {visible && <Md tw="-mb-5">{answer}</Md>}
    </div>
  );
}

export default function GenericQuestions({ items }) {
  // TODO check if we have an id and navigate to it
  const [showAll, setShowAll] = useState(isSSR);
  return (
    <>
      <div tw="text-right">
        <Button
          primary
          icon={showAll ? "up" : "down"}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Hide all Answers" : "Show all Answers"}
        </Button>
      </div>
      <div tw="divide-y divide-shade-lighter">
        {items.map(({ key, ...item }) => (
          <Question key={key} item={item} showAll={showAll} />
        ))}
      </div>
    </>
  );
}
