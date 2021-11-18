import React from "react";

import Link from "./link";

function CellContent({ item, column, i18n }) {
  let inner = item[column.key];
  if (column.iconItems) {
    return (
      <div>
        {column.iconItems.map(({ key, linkRef, icon, brand }) => {
          return (
            item[linkRef] && (
              <Link key={key} to={item[linkRef]} icon={icon} brand={brand} />
            )
          );
        })}
      </div>
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
      <i className="fas fa-check check success" />
    ) : (
      <i className="fas fa-times check" />
    );
  }

  const link =
    (column.linkPrefix && `${column.linkPrefix}${inner}`) ||
    (column.linkRef && item[column.linkRef]);

  if (link) {
    return (
      <Link icon={column.icon} brand={column.brand} to={link}>
        {inner}
      </Link>
    );
  }

  return inner || null;
}

export default function GenericTable({ items, columnItems, hideHead, i18n }) {
  return (
    <div className="table">
      <div className="table-inner">
        <table>
          {!hideHead && (
            <thead>
              <tr>
                {columnItems.map(({ name, key, className }) => (
                  <th key={key} className={className}>
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {items.map((item) => (
              <tr key={item.key} className={item.className}>
                {columnItems.map((column) => (
                  <td key={column.key} className={column.className}>
                    <CellContent {...{ item, column, i18n }} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
