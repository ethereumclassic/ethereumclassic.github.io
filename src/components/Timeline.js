import React from 'react';
import ContentItemWrapper from './ContentItemWrapper';
import Link from './Link';

const Timeline = ({ data }) => {
  const { helper, items } = data;
  return (
    <ContentItemWrapper data={data} wide>
      <div className="fork-timeline">
        <div className="items">
          {items.map(({ key, className, dateString, icon, link, text, title }) => (
            <div key={key} className={`item ${className || ''}`}>
              <div className="date">{dateString || ' '}</div>
              <div className="icon">
                <i className={icon || 'fas fa-ellipsis-h'} />
              </div>
              <div className="content">
                {title && <h3>{link ? <Link to={link}>{title}</Link> : title}</h3>}
                <div className="text">{text}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="scroll-info">
          <i className="fas fa-arrows-alt-h" />
          {` ${helper}`}
        </div>
      </div>
    </ContentItemWrapper>
  );
};

export default Timeline;
