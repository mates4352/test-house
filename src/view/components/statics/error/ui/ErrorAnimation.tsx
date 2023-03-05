import * as S from '../lib/styles/ErrorStyles';
import { AnimationShow } from '../../../animation/AnimationShow';
import { FC } from 'react';
import { ErrorType } from './Error';

type ErrorAnimationType = ErrorType & {
  margin: string;
};

export const ErrorAnimation: FC<ErrorAnimationType> = ({
  isError,
  children,
  margin,
  ...props
}) => {
  const AnimationError = {
    initial: { height: 0, opacity: 0, overflow: 'hidden' },
    animate: { height: 'auto', opacity: 1, margin: margin },
    exit: { height: 0, opacity: 0, margin: 0 },
  };

  return (
    <AnimationShow
      isAnimation={isError}
      variants={AnimationError}>
      <S.Error {...props}>{children}</S.Error>
    </AnimationShow>
  );
};
