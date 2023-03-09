import { ChangeEvent, useState } from 'react';
import { ImageFormat } from '../enum/format/image-format';
import { getBase64 } from '../helpers/functions/getBase64';

export const useAddFileImage = (
  srcImage?: string | undefined,
  onCallBack?: (value?: string) => void,
) => {
  const [image, setImage] = useState<string | undefined>(srcImage);

  const onDeleteImage = () => {
    setImage(undefined);
  };

  const addFileImage = (e: ChangeEvent<any>) => {
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
        if (typeof result === 'string') {
          setImage(result);
          onCallBack && onCallBack(result);
        }
      });
    }
  };
  return [image, addFileImage, onDeleteImage] as const;
};
