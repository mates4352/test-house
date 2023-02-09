import React, {FC} from 'react';
import {ButtonStyles} from "../lib/styles/Button-styles";

type ButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {

};

export const Button: FC<ButtonType> = ({
  children,
  ...props
}) => {
  const {Button} = ButtonStyles

  return (
    <Button {...props}>
      {children}
    </Button>
  );
};
