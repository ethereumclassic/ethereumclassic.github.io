import React from "react";
import "twin.macro";

export default function SeoHelper({ meta }) {
  return (
    <div tw="z-50 fixed p-2 left-1/4 border border-shade-lighter rounded-xl shadow bottom-2 right-2 bg-backdrop-dark text-sm">
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
  );
}
