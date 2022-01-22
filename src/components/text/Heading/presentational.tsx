import React from 'react';

import {Text} from './styles';

import {HeadingProps} from './types';

const Heading: React.FC<HeadingProps> = ({
  children,
  type,
  ...nativeTextProps
}) => {
  return (
    <Text textType={type} {...nativeTextProps}>
      {children}
    </Text>
  );
};

export default Heading;
