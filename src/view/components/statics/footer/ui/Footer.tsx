import React, { FC } from 'react';
import * as S from '../lib/styles/Footer-styles';
import * as G from '../../../../global-styled-components/global-styled-components';

type FooterType = {};

export const Footer: FC<FooterType> = ({}) => {
  return (
    <S.Footer>
      <G.Container>
        <S.List>
          <S.Item>
            <S.LinkIcon to={''} />
          </S.Item>

          <S.Item>
            <S.LinkIcon to={''} />
          </S.Item>

          <S.Item>
            <S.LinkIcon to={''} />
          </S.Item>

          <S.Item>
            <S.LinkIcon to={''} />
          </S.Item>

          <S.Item>
            <S.LinkIcon to={''} />
          </S.Item>
        </S.List>
      </G.Container>
    </S.Footer>
  );
};
