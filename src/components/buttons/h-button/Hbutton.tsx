import React from 'react';
import { Button } from './Hbutton.style';

interface Props {
  text: string,
}

export default function Hbutton({ text }: Props) {
  return (
    <Button
      type="button"
    >{ text }
    </Button>
  );
}
