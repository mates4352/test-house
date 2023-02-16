import * as S from '../lib/styles/ErrorStyles';
import { AnimationShow } from '../../../animation/AnimationShow';
import { FC } from 'react';
import { ErrorType } from './Error';

type ErrorAnimationType = ErrorType;

export const ErrorAnimation: FC<ErrorAnimationType> = ({
  isError,
  children,
  ...props
}) => {
  return (
    <AnimationShow isAnimation={isError}>
      <S.Error {...props}>{children}</S.Error>
    </AnimationShow>
  );
};
