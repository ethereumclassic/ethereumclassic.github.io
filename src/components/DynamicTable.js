import React from 'react';

import Link from './Link';

function renderContent({ item, column, i18n }) {
  let inner = item[column.key];
  if (column.icons) {
    return (
      <div className="icons">
        {column.icons.map(({ key, linkRef, icon, brand }) => {
          return item[linkRef] && <Link key={key} to={item[linkRef]} icon={icon} brand={brand} />;
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
  return inner;
}

const DynamicTable = ({ data: { items, columns, hideHead, i18n } }) => {
  return (
    <div className="table">
      <div className="table-inner">
        <table>
          {!hideHead && (
            <thead>
              <tr>
                {columns.map(({ name, key, className }) => (
                  <th key={key} className={className}>
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {items.map(item => (
              <tr key={item.key} className={item.className}>
                {columns.map(column => (
                  <td key={column.key} className={column.className}>
                    {renderContent({ item, column, i18n })}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicTable;
