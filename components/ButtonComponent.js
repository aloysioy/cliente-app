import React from 'react';
import { Button } from 'native-base';

function ButtonComponent({ mt, bg, color, children, onPress, w }) {
  return (
    <Button
      w={w || 'full'}
      h={55}
      mt={mt}
      rounded="full"
      bg={bg}
      _text={{ color: color, fontWeight: 'bold' }}
      _pressed={{ bg: bg }}
      onPress={onPress}>
      {children}
    </Button>
  );
}

export default ButtonComponent;
