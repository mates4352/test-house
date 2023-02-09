import React, {FC, ReactNode, useState} from 'react';
import {AccordionHelpStyles} from "../lib/styles/Accordion-help-styles";
import {AnimationShow} from "../../../animation/AnimationShow";

type AccordionHelpType = {
  question: string
  children: ReactNode
};

export const AccordionHelp: FC<AccordionHelpType> = React.memo(({
  question,
  children,
  ...props
}) => {
  const {AccordionHelp, Button, Content} = AccordionHelpStyles
  const [isContent, setContent] = useState<boolean>(false)
  const onClickButton = () => {
    setContent(!isContent)
  }

  const AnimationShowOption = {
    initial: {height: 0, opacity: 0, marginTop: 10, overflow: 'hidden'},
    animate: {height: 'auto', opacity: 1, marginTop: 20},
    exit: {height: 0, opacity: 0, marginTop: 2},
  }

  return (
    <AccordionHelp {...props}>
      <Button onClick={onClickButton}>
        {question}
      </Button>

      <AnimationShow isAnimation={isContent} variants={AnimationShowOption}>
        <Content>
          {children}
        </Content>
      </AnimationShow>
    </AccordionHelp>
  );
})
