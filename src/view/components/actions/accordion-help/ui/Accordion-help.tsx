import React, { FC, ReactNode, useState } from 'react';
import * as S from '../lib/styles/Accordion-help-styles';
import { AnimationShow } from '../../../animation/AnimationShow';

type AccordionHelpType = {
  question: string;
  children: ReactNode;
};

export const AccordionHelp: FC<AccordionHelpType> = React.memo(
  ({ question, children, ...props }) => {
    const [isContent, setContent] = useState<boolean>(false);
    const onClickButton = () => {
      setContent(!isContent);
    };

    const AnimationShowOption = {
      initial: { height: 0, opacity: 0, marginTop: 10, overflow: 'hidden' },
      animate: { height: 'auto', opacity: 1, marginTop: 24 },
      exit: { height: 0, opacity: 0, marginTop: 2 },
    };

    return (
      <S.AccordionHelp {...props}>
        <S.Button
          onClick={onClickButton}
          isActive={isContent}>
          {question}
          <S.CircleArrow />
        </S.Button>

        <AnimationShow
          isAnimation={isContent}
          variants={AnimationShowOption}>
          <S.Content>{children}</S.Content>
        </AnimationShow>
      </S.AccordionHelp>
    );
  },
);
