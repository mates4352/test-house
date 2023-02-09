import styled from "styled-components";

export const NewsStyles = {
  News: styled.section`
  
  `,

  Title: styled.h2`
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 48px;
    text-align: center;
  `,

  Container: styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
    box-sizing: content-box;
  `,

  List: styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  `,

  Item: styled.li`
  
  `,
}