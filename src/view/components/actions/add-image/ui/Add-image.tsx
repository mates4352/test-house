import React, { FC } from 'react';
import * as S from '../lib/styles/Add-image-styles';
import { useAddImage } from '../lib/hooks/useAddImage';
import { AnimationShow } from '../../../animation/AnimationShow';

type AddImageType = {
  src?: string;
  textButton: string;
  textButtonDeleteImage: string;
};

export const AddImage: FC<AddImageType> = ({
  textButton,
  textButtonDeleteImage,
  src,
  ...props
}) => {
  const [image, addFileImage, onDeleteImage, AnimationDeleteButton] =
    useAddImage(src);
  return (
    <S.AddImage {...props}>
      <S.Image src={image} />

      <S.Wrap>
        <S.ButtonEditImage
          isInput
          onCallbackInput={addFileImage}>
          {textButton}
        </S.ButtonEditImage>

        <AnimationShow
          isAnimation={!!image}
          variants={AnimationDeleteButton}>
          <S.ButtonDeleteImage onClick={onDeleteImage}>
            {textButtonDeleteImage}
          </S.ButtonDeleteImage>
        </AnimationShow>

        <S.TextRecommendation>
          Рекомендованный размер 924*450px Рекомендованный вес до 10 мб
        </S.TextRecommendation>
      </S.Wrap>
    </S.AddImage>
  );
};
