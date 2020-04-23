import React from 'react';
import Link from './Link';

function renderButton({ button, item }) {
  const link = item[button.key];
  if (!link) {
    return null;
  }
  return (
    <React.Fragment key={button.key}>
      <Link to={link}>{button.name}</Link>
      {'  '}
    </React.Fragment>
  );
}

const InfoGroup = content => {
  return (
    <div>
      {content.items.map(item => (
        <div key={item.key}>
          {content.buttons && (
            <div style={{ float: 'right' }}>
              {content.buttons.map(button => renderButton({ button, item, content }))}
            </div>
          )}
          <h3>
            <Link to={item.to}>{item.name}</Link>
          </h3>
          {item.description && <p>{item.description}</p>}
          {'  '}
        </div>
      ))}
    </div>
  );
};

export default InfoGroup;
