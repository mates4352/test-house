import styled from "styled-components";
import {Link} from "react-router-dom";

export const ListApplicationsStyles = {
  ListApplications: styled.div`
  
  `,

  List: styled.ul`
    display: grid;
    grid-auto-rows: minmax(min-content, max-content);
    row-gap: 24px;
  `,

  Item: styled.li`
  
  `,

  LinkElement: styled(Link)`
  `,

  Application: styled.article`
    display: grid;
    grid-template-columns: 3fr minmax(min-content, max-content) 3fr;
    column-gap: 24px;
    width: 100%;
    padding: 24px 18px;
    background-color: #65f5be;
    border-radius: 12px;
  `,

  Status: styled.div`
    font-size: 18px;
  `,

  Name: styled.p`
    font-size: 18px;
  `,

  Date: styled.time`
    font-size: 18px;
    justify-self: flex-end;
  `,
}