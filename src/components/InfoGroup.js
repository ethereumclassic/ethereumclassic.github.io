import React from 'react';
import Link from './Link';

function renderButton({ button, item }) {
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

const InfoGroup = ({ data: { items, buttons } }) => {
  return (
    <div className="cells">
      {items.map(item => (
        <div key={item.key} className="cell">
          {buttons && (
            <div className="buttons merged float-right">
              {buttons.map(button => renderButton({ button, item }))}
            </div>
          )}
          <h3>
            <Link to={item.link}>{item.name}</Link>
          </h3>
          <div className="clear" />
          {item.warning && (
            <div className="tip warning">
              <i className="info fas fa-exclamation-triangle" />
              {item.warning}
            </div>
          )}
          {item.description && <p>{item.description}</p>}
          {'  '}
        </div>
      ))}
    </div>
  );
};

export default InfoGroup;
