import React, { ReactElement } from 'react';
import { Button } from './Hbutton.style';

interface Props {
  child: ReactElement;
  backgroundColor?: string;
  disabled?: boolean;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Hbutton({ child, backgroundColor, disabled, handleClick }: Props) {
  return (
    <Button
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={() => handleClick}
      type="button"
    >{ child }
    </Button>
  );
}
