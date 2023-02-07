import { Button } from "antd";
import styled from "styled-components";

export const OfferText = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
  color: ${({ theme }) => `${theme.colors.primary}`};
  font-weight: bold;
`;

export const TimeBox = styled.div`
  padding: 10px;
  color: ${({ theme }) => `${theme.colors.primary}`};
  min-width: 50px;
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => `${theme.colors.black}`};
  padding: 10px;
  border-radius: 5px;
`;

export const DayContent = styled.span`
  color: ${({ theme }) => `${theme.colors.white}`};
`;

export const TimerBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Parent = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border: ${({ theme }) => `5px solid ${theme.borders.light}`};
  width: 400px;
  margin: 0 auto 35px auto;
  font-weight: bold;
  height: 200px;
  text-align: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 100px;
  @media (max-width: 768px) {
    width: 350px;
  }
`;

export const TypeSelectorBox = styled.div`
  display: flex;
  justfiy-content: center;
  align-items: center;
  margin: 15px 0;;
`;

export const TypeSelectorText = styled.span`
  margin: 0 10px;
  font-weight: bold;
`;

export const StyledButton = styled(Button)`
  margin-top: 15px;
`;
