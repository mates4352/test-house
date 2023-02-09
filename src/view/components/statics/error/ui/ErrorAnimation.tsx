import {ErrorStyles} from "../lib/styles/ErrorStyles";
import {AnimationShow} from "../../../animation/AnimationShow";
import {FC} from "react";
import {ErrorType} from "./Error";

type ErrorAnimationType = ErrorType

export const ErrorAnimation: FC<ErrorAnimationType> = ({
  isError,
  children,
  ...props
}) => {
  const {Error} = ErrorStyles

  return (
    <AnimationShow isAnimation={isError}>
      <Error  {...props}>
        {children}
      </Error>
    </AnimationShow>
  );
};