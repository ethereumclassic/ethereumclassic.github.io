import React from 'react';

import Link from './Link';

const Menu = ({ items, list, className, onClick }) => {
  const Wrapper = list ? 'ul' : 'div';
  const Item = list ? 'li' : 'div';
  return (
    <Wrapper className={`menu ${className || ''}`}>
      {items.map(i => (
        <Item key={i.key}>
          <Link to={i.to} onClick={onClick}>
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
