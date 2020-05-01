import React from 'react';
import CommonContent from '../../components/CommonContent';
import LayoutPage from '../../components/LayoutPage';
import Roadmap from '../../components/Roadmap';
import Timeline from '../../components/Timeline';

const RoadmapTemplate = props => {
  const {
    pageContext: { i18n }
  } = props;
  return (
    <LayoutPage {...props} className="wide">
      <Timeline data={i18n.timeline} />
      <CommonContent content={[i18n.ecips]} />
      <Roadmap data={i18n.roadmap} />
    </LayoutPage>
  );
};

export default RoadmapTemplate;
