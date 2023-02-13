import React, {FC, ReactNode} from 'react';
import {AnimatePresence, motion} from "framer-motion";

type TemplateNameType = {
  isAnimation: boolean
  children: ReactNode
};

export const TemplateNameOption = {
  initial: {height: 0, opacity: 0},
  animate: {height: 'auto', opacity: 1},
  exit: {height: 0, opacity: 0},
}

export const TemplateName: FC<TemplateNameType> = ({
  children,
  isAnimation,
  ...props
}) => {
  return (
    <AnimatePresence>
      {isAnimation &&
          <motion.span
            {...props}
            variants={TemplateNameOption}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}>
            {children}
          </motion.span>
      }
    </AnimatePresence>
  );
};