import React from "react";
import "twin.macro";
import { Popover } from "@headlessui/react";

import { useNavigation } from "../utils/navigationProvider";
import MainMenuItem from "./mainMenuItem";

export default function MainMenu() {
  const { main } = useNavigation();
  return (
    <Popover.Group as="nav" tw="flex space-x-6">
      {main
        .filter(({ hideTop }) => !hideTop)
        .map((item) => (
          <MainMenuItem key={item.key} item={item} />
        ))}
    </Popover.Group>
  );
}
