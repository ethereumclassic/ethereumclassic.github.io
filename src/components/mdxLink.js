import React from 'react';
import Link from './link';

const MdxLink = ({ href, ...props }) => <Link to={href} {...props} />;

export default MdxLink;
