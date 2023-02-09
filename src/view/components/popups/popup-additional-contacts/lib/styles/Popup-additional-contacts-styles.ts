import styled from "styled-components";

export const PopupAdditionalContactsStyles = {
  PopupAdditionalContacts: styled.div`
    width: max-content;
    min-height: 50px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 0 3px #999;
    padding: 12px 8px;
  `,

  List: styled.ul`
    display: grid;
    grid-auto-rows: minmax(min-content, max-content);
    row-gap: 12px;
    margin-bottom: 8px;
  `,

  Item: styled.li`
    
  `,

  Plus: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin: 0 auto;
    font-size: 18px;
    border: 1px solid darkslategray;
    border-radius: 50%;
  `,
}