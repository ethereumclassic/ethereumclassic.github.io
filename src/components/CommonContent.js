import React from 'react';

import LinksList from './LinksList';
import ButtonsGroup from './ButtonsGroup';
import DynamicTable from './DynamicTable';
import Json from './Json';

const components = {
  buttons: ButtonsGroup,
  links: LinksList,
  table: DynamicTable,
  json: Json
};

function getDescendantProp(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function resolveRefs(_obj, refs) {
  const { configRef, itemsRef, ...obj } = _obj;
  if (configRef) {
    const ref = getDescendantProp(refs, configRef);
    return resolveRefs({ ...ref, ...obj }, refs);
  }
  if (itemsRef) {
    const items = getDescendantProp(refs, itemsRef);
    return { ...obj, items };
  }
  return obj;
}

const CommonContent = ({ content, refs }) => {
  if (!content) {
    return null;
  }
  return (
    <>
      {(Array.isArray(content) ? content : [content]).map(_contentItem => {
        const contentItem = resolveRefs(_contentItem, refs);
        const Component = components[contentItem.type] || Json;
        return (
          <React.Fragment key={contentItem.key}>
            {contentItem.intro && <p>{contentItem.intro}</p>}
            <Component {...contentItem} />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default CommonContent;
