import styled from "styled-components";

export const NewPortFolioStackLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NewPortFolioStackTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};
`;

export const NewPortFolioStackBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-left: 20px;
`;

export const NewPortFolioStackCardLayout = styled.div`
  position: relative;
  width: 100%;
  min-height: 550px;
  display: flex;
  flex-direction: column;
`;

export const NewPortFolioStackCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.shadow.stack};

  &.stackCard-0 {
    top: 0;
    left: 0;
    z-index: 2;
    background: ${(props) => props.theme.colors.gray};
  }

  &.stackCard-1 {
    top: 25px;
    left: 0;
    z-index: 1;
    background: ${(props) => props.theme.colors.gray};
  }

  &.stackCard-2 {
    top: 50px;
    left: 0;
    z-index: -1;
    background: ${(props) => props.theme.colors.gray};
  }

  &.all-view {
    z-index: -2;
  }
`;
