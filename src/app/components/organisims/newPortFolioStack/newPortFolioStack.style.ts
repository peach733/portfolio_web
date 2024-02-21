import styled from "styled-components";

export const NewPortFolioStackLayout = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px;
  gap: 12px;
  background: ${(props) => props.theme.background.primary};
`;

export const NewPortFolioStackTitleBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NewPortFolioStackTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};
`;

export const NewPortFolioStackAllViewBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const allViewText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.point};
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
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const NewPortFolioStackCard = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.shadow.stack};
`;
