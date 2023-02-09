import styled from "styled-components";

export const PopupNotificationStyles = {
  PopupNotification: styled.section`
    background-color: #fff;
    width: 250px;
    border-radius: 12px;
    box-shadow: 0 0 3px #808080;
  `,

  Wrap: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    box-shadow: 0 1px 3px #e1e1e1;
  `,

  Content: styled.div`
    padding: 12px 4px 12px;
  `,

  Title: styled.h2`
    font-size: 18px;
  `,

  Count: styled.div`
    font-size: 12px;
  `,

  List: styled.ul`
    display: grid;
    grid-auto-rows: minmax(min-content, max-content);
    height: 150px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #a0b7ff;
      border-radius: 12px;

      &:active {
        background-color: #6187ff;
      }
    }
  `,

  Item: styled.li`
    border-bottom: 1px solid #65f5be;
    padding: 12px 8px;

    &:first-of-type {
      padding: 0 8px 12px;
    }
    
    &:last-of-type {
      border-bottom: unset;
      padding: 12px 8px 0;
    }
    
    &:only-child {
      border-bottom: 1px solid #65f5be;
      padding: 0 8px 12px;
    }
  `,

  Notification: styled.button`
    display: block;
    
    text-align: left;
  `,
}