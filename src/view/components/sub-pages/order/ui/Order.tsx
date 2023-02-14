import React, {FC} from 'react';
import * as S from "../lib/styles/Order-styles";
import {Chat} from "../../../statics/chat";
import * as G from '../../../../global-styled-components/global-styled-components';

type OrderType = {};

export const Order: FC<OrderType> = ({}) => {

  return (
    <S.Order>
      <G.Container>
        <S.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum error excepturi facilis, inventore
          natus pariatur quaerat quod rem unde. Alias animi dolor enim laboriosam odit velit voluptatibus? Animi
          architecto at culpa dolore eveniet facere, magnam nihil non officia perspiciatis, quas quia quidem quos rem
          repudiandae similique veniam. Ab at corporis et, expedita harum illum natus, non odit omnis optio quibusdam
          quisquam reprehenderit rerum sequi sint soluta ullam vel voluptate. Alias dolore impedit libero nemo quaerat
          sed velit. Alias fuga iure mollitia optio sed tenetur. Alias aliquam beatae consectetur consequatur dolores
          facilis incidunt labore minima, numquam possimus quas reiciendis voluptatibus?
        </S.Text>

        <Chat/>
      </G.Container>
    </S.Order>
  );
};
