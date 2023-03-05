import React, { FC } from 'react';
import * as S from '../lib/styles/Footer-styles';

type FooterType = {};

export const Footer: FC<FooterType> = ({}) => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.Wrap>
          <S.Title>ООО "ЖКС №3 Центрального района"</S.Title>

          <S.Text>
            г. Санкт-Петербург, <br />
            пр-кт. Суворовский, д. 60
          </S.Text>

          <S.List>
            <S.Item>
              <S.Link
                href="tel:+78122713133"
                target="_blank">
                +7 (812) 271-31-33
              </S.Link>
            </S.Item>

            <S.Item>
              <S.Link
                href="gks3cr@mail.ru"
                target="_blank">
                gks3cr@mail.ru
              </S.Link>
            </S.Item>

            <S.Item>
              <S.Link
                href="www.gks3cr.ru"
                target="_blank">
                www.gks3cr.ru
              </S.Link>
            </S.Item>
          </S.List>
        </S.Wrap>

        <S.ListSchedule>
          <S.ItemSchedule>
            <S.SubTitle>Режим работы:</S.SubTitle>

            <S.Dl>
              <S.WrapDl>
                <S.Dt>Понедельник-Четверг</S.Dt>
                <S.Dd>9.00-18.00</S.Dd>
              </S.WrapDl>

              <S.WrapDl>
                <S.Dt>Пятница</S.Dt>
                <S.Dd>
                  9.00-17. <br /> (перерыв 13.00-14.00)
                </S.Dd>
              </S.WrapDl>
            </S.Dl>
          </S.ItemSchedule>

          <S.ItemSchedule>
            <S.SubTitle>Личный прием граждан:</S.SubTitle>

            <S.Dl>
              <S.WrapDl>
                <S.Dt>Понедельник</S.Dt>
                <S.Dd>17.00-19.00</S.Dd>
              </S.WrapDl>

              <S.WrapDl>
                <S.Dt>Четверг</S.Dt>
                <S.Dd>10.00-12.00</S.Dd>
              </S.WrapDl>
            </S.Dl>
          </S.ItemSchedule>
        </S.ListSchedule>
      </S.FooterContainer>
    </S.Footer>
  );
};
