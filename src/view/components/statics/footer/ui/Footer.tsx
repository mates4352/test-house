import React, {FC} from 'react';
import {FooterStyles} from "../lib/styles/Footer-styles";

type FooterType = {

};

export const Footer: FC<FooterType> = ({}) => {
  const {Footer, Container, List, Item, LinkIcon} = FooterStyles

  return (
    <Footer>
      <Container>
        <List>
          <Item>
            <LinkIcon to={''}/>
          </Item>

          <Item>
            <LinkIcon to={''}/>
          </Item>

          <Item>
            <LinkIcon to={''}/>
          </Item>

          <Item>
            <LinkIcon to={''}/>
          </Item>

          <Item>
            <LinkIcon to={''}/>
          </Item>
        </List>
      </Container>
    </Footer>
  );
};
