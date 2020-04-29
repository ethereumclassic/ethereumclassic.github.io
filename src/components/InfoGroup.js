import React from 'react';
import Link from './Link';

function renderButton({ button, item }) {
  const link = item[button.key];
  const icon = button.icon || item[button.iconRef];
  if (!link) {
    return null;
  }
  return (
    <React.Fragment key={button.key}>
      <Link button to={link} icon={icon}>
        {button.name}
      </Link>
      {'  '}
    </React.Fragment>
  );
}

const InfoGroup = ({ data: { items, buttons } }) => {
  return (
    <div className="cells">
      {items.map(item => (
        <div key={item.key} className="cell">
          {buttons && (
            <div className="buttons float-right">
              {buttons.map(button => renderButton({ button, item }))}
            </div>
          )}
          <h3>
            <Link to={item.to}>{item.name}</Link>
          </h3>
          <div className="clear" />
          {item.description && <p>{item.description}</p>}
          {'  '}
        </div>
      ))}
    </div>
  );
};

export default InfoGroup;
