import React from "react";
import "twin.macro";
import Icon from "./icon";

import Link from "./link";

function CellContent({ item, column, i18n }) {
  let inner = item[column.key];
  if (column.iconItems) {
    return (
      <>
        {column.iconItems.map(({ key, linkRef, icon }) => {
          return (
            item[linkRef] && (
              <Link big round button key={key} to={item[linkRef]} icon={icon} />
            )
          );
        })}
      </>
    );
  }
  if (inner && column.text) {
    inner = column.text;
  }
  if (column.textRef) {
    inner = i18n[item[column.textRef]];
  }
  if (column.checkRef) {
    inner = item[column.checkRef] ? (
      <Icon icon="check" tw="h-4 text-primary-neutral" />
    ) : (
      <Icon icon="times" tw="h-4 text-shade-light" />
    );
  }

  const link =
    (column.linkPrefix && `${column.linkPrefix}${inner}`) ||
    (column.linkRef && item[column.linkRef]);

  if (link) {
    return (
      <Link
        button={column.button}
        showExternal
        icon={column.icon}
        brand={column.brand}
        to={link}
      >
        {inner}
      </Link>
    );
  }

  return inner || null;
}

export default function GenericTable({ items, columnItems, hideHead, i18n }) {
  // TODO order items
  // TODO overflow scroll
  return (
    <div tw="max-w-full overflow-x-auto">
      <table>
        {!hideHead && (
          <thead>
            <tr>
              {columnItems.map(({ name, key }) => (
                <th key={key}>{name}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {items.map((item) => (
            <tr key={item.key}>
              {columnItems.map((column) => (
                <td key={column.key} tw="!align-middle">
                  {(column.items || [column]).map((col, i) => (
                    <CellContent
                      key={`${item.key}${col.key}`}
                      {...{
                        item,
                        column: col,
                        i18n,
                        first: i === 0,
                      }}
                    />
                  ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
