import React from 'react';

import TimelineItem from './timelineItem';

const ForkTimeline = ({ i18n, items }) => (
  <div className="fork-timeline">
    <div className="items">
      {items.map(item => (
        <TimelineItem {...item} />
      ))}
    </div>
    <div className="scroll-info">
      <i className="fas fa-arrows-alt-h" />
      {` ${i18n.helperText}`}
    </div>
  </div>
);

export default ForkTimeline;
