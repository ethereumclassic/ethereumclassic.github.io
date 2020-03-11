import React from 'react';
import Link from './link';
import ButtonLink from './buttonLink';
import { sortBy } from '../utils';

const ItemTable = ({ items, columns, header, hideHead, sortedBy, rowClass }) => {
  const sorted = sortBy(sortedBy, items);
  return (
    <div className="item-table">
      {header}
      <table>
        {!hideHead && (
          <thead>
            <tr>
              {columns.map(({ name, key }) => (
                <th key={key}>{name}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {sorted.map(item => (
            <tr key={item.key} className={rowClass && rowClass(item)}>
              {columns.map(col => (
                <td key={col.key}>
                  {(() => {
                    if (col.render) {
                      return col.render(item[col.key], item);
                    }
                    if (col.type === 'check') {
                      return item[col.key] ? '✅' : '❌';
                    }
                    const link = item[(col.text ? col.key : col.linkKey) || 'link'];
                    if (col.type === 'link') {
                      return link && <Link {...col} text={item[col.key]} to={link} />;
                    }
                    if (col.type === 'button') {
                      return link && <ButtonLink {...col} text={col.text} to={link} />;
                    }
                    return item[col.key];
                  })()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
