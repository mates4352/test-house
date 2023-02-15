import styled, {css} from "styled-components";

type PaginationButtonType = {
  currentPage?: boolean
}

const Pagination = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, max-content));
  column-gap: 48px;
  align-items: center;
`

const Wrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: minmax(min-content, max-content);
  align-items: center;
  column-gap: 24px;
`

const PaginationButtonPrev = styled.button`

`

const PaginationButtonNext = styled.button`

`

const List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(min-content, max-content);
  column-gap: 12px;
`

const Item = styled.li`

`

const PaginationButton = styled.button<PaginationButtonType>`
  min-width: 40px;
  padding: 4px;
  height: 40px;
  font-size: 22px;
  color: #fff;
  background-color: #020b41;
  border-radius: 8px;
  box-shadow: 0 0 3px #999;
  transition: color 300ms ease, background-color 300ms ease;

  ${props => props.currentPage && css`
    background-color: #c3cbff;
    color: #020b41;
  `}
  
  &:hover {
    background-color: #c3cbff;
    color: #020b41;
  }
`

const Point = styled.div`
  display: inline-block;
  margin-left: 15px; 
`

export {Pagination, Wrap, PaginationButtonPrev, PaginationButtonNext, List, Item, PaginationButton, Point}