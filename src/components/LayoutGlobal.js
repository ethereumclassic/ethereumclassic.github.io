import React from 'react';

import { withI18n } from 'gatsby-plugin-yaml-i18n';

// TODO add SEO and stuff
const LayoutGlobal = ({ children }) => <>{children}</>;

export default withI18n()(LayoutGlobal);
