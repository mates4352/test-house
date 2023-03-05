import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CardImage } from '../../../../statics/card-image/lib/styles/Card-image-styles';

type CardType = {
  bg?: string;
};

const LinkNews = styled(Link)``;

const Card = styled(CardImage)<CardType>`
  position: relative;
  height: 280px;
  margin-bottom: 24px;
`;

const Image = styled.img`
  width: 148px;
  height: 148px;
`;

const Tag = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 4px 16px;
  color: var(--white);
  background-color: var(--deep-blue);
  border-radius: 40px;
`;

const ButtonEdit = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  opacity: 0;
  visibility: hidden;
  transition: visibility 300ms ease, opacity 300ms ease;

  ${LinkNews}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  border-radius: 24px;
  opacity: 0;
  visibility: hidden;
  transition: visibility 300ms ease, opacity 300ms ease;

  ${LinkNews}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const Text = styled.p`
  font: var(--text-24-semibold);
  color: var(--black);
  margin-bottom: 16px;
`;

const SubText = styled.p`
  font: var(--text-16);
  color: var(--dark-grey);
  font-size: 20px;
`;

export { LinkNews, Card, Bg, Tag, ButtonEdit, Image, Text, SubText };
