import React from 'react';

import Link from '~components/link';

const SubMenu = ({ items, expanded, tabs }) => {
  const ContainerEl = expanded || tabs ? 'div' : 'ul';
  return (
    <ContainerEl className={`sub-menu ${tabs ? 'tabs' : ''}`}>
      {items.map(i => {
        if (i.hidden) {
          return null;
        }
        const link = (
          <Link
            key={i.key || `${i.text}${i.link || i.to}`}
            className={`${i.selected ? 'selected' : ''}`}
            to={i.link || i.to}
            text={i.name || i.text}
          />
        );
        if (expanded) {
          return (
            <div key={i.key}>
              <h3>
                {link}
                {i.shortText && <small>{` ${i.shortText}`}</small>}
              </h3>
              <p>{i.text}</p>
            </div>
          );
        }
        if (tabs) {
          return link;
        }
        return (
          <li key={i.key}>
            <b>{link}</b>
            {i.shortText && <small>{` ${i.shortText}`}</small>}
          </li>
        );
      })}
    </ContainerEl>
  );
};

export default SubMenu;
