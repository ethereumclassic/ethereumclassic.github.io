import React from 'react';

import Link from './Link';

const Menu = ({ items, list, className, onClick, ...props }) => {
  const Wrapper = list ? 'ul' : 'div';
  const Item = list ? 'li' : 'div';
  return (
    <Wrapper className={`menu ${className || ''}`} {...props}>
      {items.map(i => (
        <Item key={i.key}>
          <Link
            to={i.link}
            noScroll={i.noScroll}
            localized={i.localized}
            className={i.className}
            onClick={onClick}
          >
            {i.name}
          </Link>
          {i.tip && (
            <>
              {'  '}
              <small>{i.tip}</small>
            </>
          )}
        </Item>
      ))}
    </Wrapper>
  );
};

export default Menu;
