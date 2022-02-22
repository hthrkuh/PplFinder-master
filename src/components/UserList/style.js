import styled from "styled-components";

export const UserList = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 500px;
  width: 100%;
  height: calc(100vh - 270px);
  margin-block-start: 30px;
  overflow-y: auto;
`;

export const User = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 16px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: max-content;
  max-height: 128px;
  gap: 2px;
  overflow: hidden;

`;

export const UserPicture = styled.img`
  width: 100%;
  height: 128px;
  border-radius: 45%;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    margin-inline-end: 8px;
  }
`;
