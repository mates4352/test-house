import { ChangeEvent, useState } from 'react';
import { getBase64 } from '../../../../../../core/utils/helpers/functions/getBase64';
import { ImageFormat } from '../../../../../../core/utils/enum/format/image-format';

export const useAddImage = (srcImage?: string) => {
  const [image, setImage] = useState<string | undefined>(srcImage);
  const onChangeFileImage = (e: ChangeEvent<any>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const type = e.target.files[0].type;
    if (
      type === ImageFormat.PNG ||
      type === ImageFormat.JPEG ||
      type === ImageFormat.WEBP ||
      type === ImageFormat.JPG
    ) {
      getBase64(e.target.files[0]).then(result => {
        if (typeof result === 'string') setImage(result);
      });
    }
  };

  const onDeleteImage = () => {
    setImage(undefined);
  };

  const AnimationDeleteButton = {
    initial: { width: 0, opacity: 0, overflow: 'hidden' },
    animate: { width: 'auto', opacity: 1 },
    exit: { width: 0, opacity: 0 },
  };

  return [
    image,
    onChangeFileImage,
    onDeleteImage,
    AnimationDeleteButton,
  ] as const;
};
