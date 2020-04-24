import React from 'react';

import LinksList from './LinksList';
import ButtonsGroup from './ButtonsGroup';
import DynamicTable from './DynamicTable';
import InfoGroup from './InfoGroup';
import Json from './Json';
import ContentItemWrapper from './ContentItemWrapper';

const components = {
  buttons: ButtonsGroup,
  links: LinksList,
  table: DynamicTable,
  info: InfoGroup,
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
      {(Array.isArray(content) ? content : [content]).map((_item, i) => {
        const item = resolveRefs(_item, refs);
        const Component = components[item.type] || Json;
        return (
          <ContentItemWrapper data={item} key={item.key || `${content.key}-${i}`}>
            <Component data={item} />
          </ContentItemWrapper>
        );
      })}
    </>
  );
};

export default CommonContent;
