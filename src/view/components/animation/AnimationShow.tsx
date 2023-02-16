import React, { FC, ReactNode } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

type AnimationShowType = {
  isAnimation: boolean;
  children: ReactNode;
  variants?: Variants;
};

export const AnimationShow: FC<AnimationShowType> = ({
  variants,
  children,
  isAnimation,
  ...props
}) => {
  const AnimationShowOption = {
    initial: { height: 0, opacity: 0, overflow: 'hidden' },
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isAnimation && (
        <motion.div
          {...props}
          variants={variants ? variants : AnimationShowOption}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
