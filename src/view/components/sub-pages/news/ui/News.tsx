import React, {FC} from 'react';
import {NewsStyles} from "../lib/styles/News-styles";
import {LinkNews} from "../../../actions/link-news";

type NewsType = {};

export const News: FC<NewsType> = ({}) => {
  const {News, Container, Title, List, Item} = NewsStyles

  return (
    <News>
      <Container>
        <Title>Новости</Title>
          <List>
            <Item>
              <LinkNews
                srcImage={''}
                text={''}
                id={''}/>
            </Item>

            <Item>
              <LinkNews
                srcImage={''}
                text={''}
                id={''}/>
            </Item>

            <Item>
              <LinkNews
                srcImage={''}
                text={''}
                id={''}/>
            </Item>

            <Item>
              <LinkNews
                srcImage={''}
                text={''}
                id={''}/>
            </Item>

            <Item>
              <LinkNews
                srcImage={''}
                text={''}
                id={''}/>
            </Item>

            <Item>
              <LinkNews
                srcImage={''}
                text={''}
                id={''}/>
            </Item>

            <Item>
              <LinkNews
                srcImage={''}
                text={''}
                id={''}/>
            </Item>
          </List>
      </Container>
    </News>
  );
};
