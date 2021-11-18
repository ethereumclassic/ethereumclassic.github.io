import React from "react";
import Link from "./link";
import Md from "./markdownDynamic";

function CellButton({ button, item }) {
  const link = item[button.key];
  const icon = button.icon || item[button.iconRef];
  if (!link) {
    return null;
  }
  return (
    <Link button to={link} icon={icon} key={button.key}>
      {button.name}
    </Link>
  );
}

export default function ContentItemCells({ items, buttonItems }) {
  return (
    <>
      {items.map((item) => (
        <div key={item.key} className="cell">
          {buttonItems && (
            <div className="buttonItems merged float-right">
              {buttonItems.map((button) => (
                <CellButton key={button.key} button={button} item={item} />
              ))}
            </div>
          )}
          <h3>
            <Link to={item.link} showExternal>
              {item.name}
            </Link>
          </h3>
          <div className="clear" />
          {item.warning && (
            <div className="tip warning">
              <i className="info fas fa-exclamation-triangle" />
              {item.warning}
            </div>
          )}
          {item.description && <Md>{item.description}</Md>}
          {"  "}
        </div>
      ))}
    </>
  );
}
