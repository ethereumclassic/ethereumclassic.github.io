import React, { Fragment, useEffect, useState } from "react";
import "twin.macro";

import slugify from "slugify";

import isSSR from "../utils/isSSR";
import scrollToElement from "../utils/scrollToElement";

import Md from "./markdownDynamic";
import Icon from "./icon";
import Button from "./button";
import tw from "twin.macro";

// TODO noscript show all

function Question({ item: { question, answer }, showAll }) {
  const [showing, setShowing] = useState(showAll);
  const slug = slugify(question, { lower: true, strict: true });
  return (
    <div tw="py-5 px-4" css={[showing && tw`bg-backdrop-light`]}>
      <div
        id={slug}
        tw="cursor-pointer flex items-center space-x-2 text-left text-shade-dark hover:text-shade-darkest text-lg font-bold"
        onClick={() => {
          if (!showing) {
            window.history.replaceState(null, null, `#${slug}`);
          }
          setShowing(!showing);
        }}
      >
        <div>
          <Icon icon={showing ? "down" : "right"} tw="w-5 h-5" />
        </div>
        <div>{question}</div>
      </div>
      {showing && <Md tw="-mb-5">{answer}</Md>}
    </div>
  );
}

export default function GenericQuestions({ items }) {
  const [showAll, setShowAll] = useState(isSSR);
  useEffect(() => {
    const elementId = window.location.hash.slice(1);
    console.log("elementId", elementId);
    const element = document.getElementById(elementId);
    if (element) {
      console.log("element", element);
      element.click();
      scrollToElement(elementId, 160, "instant");
    }
  }, []);
  return (
    <>
      <div tw="text-right">
        <Button
          transparent
          tw="rounded-b-none border-b-0"
          icon={showAll ? "up" : "down"}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Hide all Answers" : "Show all Answers"}
        </Button>
      </div>
      <div tw="divide-y divide-shade-lighter border border-shade-lighter rounded-l overflow-hidden">
        {items.map(({ key, ...item }) => (
          <Question key={`${key}-${showAll}`} item={item} showAll={showAll} />
        ))}
      </div>
    </>
  );
}
