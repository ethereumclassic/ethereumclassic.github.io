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

const CommonContent = ({ content, refs }) => {
  if (!content) {
    return null;
  }
  return (
    <>
      {(Array.isArray(content) ? content : [content]).map(contentItem => {
        const Component = components[contentItem.type] || Json;
        const { items: _items, itemsRef, intro } = contentItem;
        const items = _items || (refs && itemsRef && getDescendantProp(refs, itemsRef));
        return (
          <>
            {intro && <p>{intro}</p>}
            <Component {...contentItem} items={items} />
          </>
        );
      })}
    </>
  );
};

export default CommonContent;
