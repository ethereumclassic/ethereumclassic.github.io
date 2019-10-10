import React from "react";
import ButtonLink from "components/ButtonLink";

const LinkGroup = ({ title, items }) => {

  return (
    <div className="link-group">
      {title && <h5>{title}</h5>}
      {items.map(({ link, text, icon }) => (
        <ButtonLink link={link} key={link}>
          {/* {icon && } */}
          {text}
        </ButtonLink>
      ))}
    </div>
  )
};

export default LinkGroup;
