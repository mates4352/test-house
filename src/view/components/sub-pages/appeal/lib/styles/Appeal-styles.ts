import styled from "styled-components";
import {Button} from "../../../../actions/button";

export const AppealStyles = {
  Appeal: styled.div`
  
  `,

  Container: styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
    box-sizing: content-box;
  `,

  Button: styled(Button)`
    margin-top: 30px;
    width: 120px;
    height: 60px;
  `,

  List: styled.ul`
    display: grid;
    grid-auto-rows: minmax(min-content, max-content);
    row-gap: 24px;
  `,
}