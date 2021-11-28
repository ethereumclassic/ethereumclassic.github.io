import React from "react";
import tw from "twin.macro";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

import { useNavigation } from "../utils/navigationProvider";

import Icon from "./icon";
import Link from "./link";

function Box({ item, prev, i18n, alone }) {
  if (!item?.name) {
    return null;
  }
  return (
    <Link
      to={item.link}
      css={[
        tw`flex-1 space-y-2 px-4 py-3 shadow-md bg-backdrop-light text-right`,
        prev && tw`text-left`,
        alone && tw`flex items-center space-y-0`,
      ]}
    >
      <div css={[tw`uppercase text-sm tracking-widest`]}>
        {prev ? i18n.prev : i18n.next}
      </div>
      <div
        css={[
          tw`flex items-center`,
          prev && tw`flex-row-reverse`,
          alone && tw`flex-1`,
        ]}
      >
        <div tw="text-xl mx-4 flex-auto">{item.name}</div>
        <Icon icon={prev ? "left" : "right"} tw="h-4" />
      </div>
    </Link>
  );
}

export default function PrevNextNav() {
  const { next, prev, sub } = useNavigation();
  const { ui } = useGlobals();
  if (!sub?.showNextNav && !sub?.showPrevNav) {
    return null;
  }
  if (!next && !prev) {
    return null;
  }
  const alone =
    (sub.showNextNav && !sub.showPrevNav) ||
    (!sub.showNextNav && sub.showPrevNav);
  return (
    <div tw="mt-10 flex space-x-6">
      {sub.showPrevNav && <Box item={prev} i18n={ui} alone={alone} prev />}
      {sub.showNextNav && <Box item={next} i18n={ui} alone={alone} />}
    </div>
  );
}
