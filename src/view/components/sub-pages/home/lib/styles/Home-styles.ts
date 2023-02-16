import styled from 'styled-components';
import { Link } from 'react-router-dom';

type BlockType = {
  bg: string;
};

const Home = styled.div``;

const Block = styled(Link)<BlockType>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
  margin-bottom: 44px;
  font-size: 20px;
  text-align: center;
  background-color: ${props => props.bg};
  border-radius: 12px;

  &:last-of-type {
    margin-bottom: unset;
  }
`;

export { Home, Block };
