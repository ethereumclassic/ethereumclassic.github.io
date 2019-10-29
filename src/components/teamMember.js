import React from 'react';
import SocialIcon from './socialIcon';

import anon from '../assets/images/anon.jpg';
import TeamImageWrapper from './teamImageWrapper';

const TeamMember = ({ description, name, title, github, twitter, children: image }) => {
  // return null;
  const hasIcons = github || twitter;
  const imgComp = image || <TeamImageWrapper src={anon} />;
  return (
    <div className="team-member item">
      <div className="visuals">
        <div className="image">{imgComp}</div>
        {hasIcons && (
          <ul className="icons inverted">
            {twitter && (
              <SocialIcon
                to={`https://twitter.com/${twitter}`}
                text={`@${name} on Twitter`}
                icon="twitter"
              />
            )}
            {github && (
              <SocialIcon
                to={`https://github.com/${github}`}
                text={`${name} on Github`}
                icon="github"
              />
            )}
          </ul>
        )}
      </div>
      <div className="text">
        <h3>{name}</h3>
        {title && <h4>{title}</h4>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default TeamMember;
