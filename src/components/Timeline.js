import React from 'react';
import ContentItemWrapper from './ContentItemWrapper';
import Link from './Link';

const Timeline = ({ data }) => {
  const { helper, latest, items } = data;
  return (
    <ContentItemWrapper data={data} wide>
      <div className="fork-timeline">
        <div className="items">
          {items.map(({ key, className, date, icon, link, text, title }, i) => (
            <div
              key={key}
              className={`item ${className || ''}`}
              id={i + 1 === items.length ? 'latest' : null}
            >
              <div className="date">{date || ' '}</div>
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
          <div className="helper float-left">
            <i className="fas fa-arrows-alt-h" />
            {` ${helper}`}
          </div>
          <Link className="float-right" to="#latest" next button>
            {latest}
          </Link>
        </div>
      </div>
    </ContentItemWrapper>
  );
};

export default Timeline;
