import React from 'react';

import Link from './link';

const TimelineItem = ({ icon, date, title, text, className, link, children }) => (
  <div className={`item ${className || ''}`}>
    <div className="date">{date || ' '}</div>
    <div className="icon">
      <i className={icon || 'fas fa-ellipsis-h'} />
    </div>
    <div className="content">
      {title && <h3>{link ? <Link to={link} text={title} /> : title}</h3>}
      <div className="text">{text || children}</div>
    </div>
  </div>
);

export default TimelineItem;
