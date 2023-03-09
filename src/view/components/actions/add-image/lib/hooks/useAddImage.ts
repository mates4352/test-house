import { useAddFileImage } from '../../../../../../core/utils/hooks/useAddFileImage';

export const useAddImage = (srcImage?: string) => {
  const [image, addFileImage, onDeleteImage] = useAddFileImage(srcImage);

  const AnimationDeleteButton = {
    initial: { width: 0, opacity: 0, overflow: 'hidden' },
    animate: { width: 'auto', opacity: 1 },
    exit: { width: 0, opacity: 0 },
  };

  return [image, addFileImage, onDeleteImage, AnimationDeleteButton] as const;
};
