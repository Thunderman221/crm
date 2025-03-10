'use client';

import Button, { ButtonProps } from '../components/button';
import React, { useEffect, useState } from 'react';

const MagicButton = (props: ButtonProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 2) {
      throw new Error('Unexpected error');
    }
  }, [count]);

  return (
    <Button {...props} onClick={() => setCount(count + 1)}>
      Magic button
    </Button>
  );
};
export default MagicButton;
