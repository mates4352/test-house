import React, {FC} from 'react';
import {ApplicationStyles} from "../lib/styles/Application-styles";
import {FieldText} from "../../../actions/field-text";
import {Chat} from "../../../statics/chat";

type ApplicationType = {};

export const Application: FC<ApplicationType> = ({}) => {
  const {Application, Container, Text} = ApplicationStyles

  return (
    <Application>
      <Container>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum error excepturi facilis, inventore
          natus pariatur quaerat quod rem unde. Alias animi dolor enim laboriosam odit velit voluptatibus? Animi
          architecto at culpa dolore eveniet facere, magnam nihil non officia perspiciatis, quas quia quidem quos rem
          repudiandae similique veniam. Ab at corporis et, expedita harum illum natus, non odit omnis optio quibusdam
          quisquam reprehenderit rerum sequi sint soluta ullam vel voluptate. Alias dolore impedit libero nemo quaerat
          sed velit. Alias fuga iure mollitia optio sed tenetur. Alias aliquam beatae consectetur consequatur dolores
          facilis incidunt labore minima, numquam possimus quas reiciendis voluptatibus?
        </Text>

        <Chat/>
      </Container>
    </Application>
  );
};
