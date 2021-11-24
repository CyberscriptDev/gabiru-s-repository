import React from 'react';
import { Button, Field } from './Hbutton.style';

interface Props {
  text: string,
}

export default function Hbutton({ text }: Props) {
  return (
    <Field>
      <Button
        type="button"
      >{ text }
      </Button>
    </Field>
  );
}
