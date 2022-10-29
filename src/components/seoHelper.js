import React, { useState } from "react";
import tw from "twin.macro";
import Icon from "./icon";

export default function SeoHelper({ meta }) {
  const [hidden, setHidden] = useState();
  return (
    <div tw="z-50 fixed p-4 ml-32 border border-shade-lighter rounded-xl shadow bottom-20 right-5 bg-blue-100 opacity-75 text-sm text-black">
      <Icon
        icon={hidden ? "left" : "times"}
        tw="h-5 right-0 top-0 absolute mx-3 mt-2"
        onClick={() => {
          setHidden(!hidden);
        }}
      />
      {!hidden && (
        <div tw="max-w-6xl">
          <table>
            <tbody>
              {["title", "description"].map((key) => (
                <tr key={key}>
                  <td tw="pr-2 opacity-60 align-top">{key}</td>
                  <td>{meta[key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
