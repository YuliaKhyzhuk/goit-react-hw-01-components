import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  width: 320px;
  border-radius: ${props => props.theme.borderRadius.sm};
  background-color: ${props => props.theme.colors.backgroundGreen};

  box-shadow: ${props => {
    return ` 0 1px 3px ${props.theme.colors.secondaryAccent}`;
  }};

  transition: ${props => props.theme.transition};
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (min-width: 768px) {
    width: 360px;
  }
  @media (min-width: 1280px) {
    width: 480px;
  }
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  padding: 0;
  margin-top: 0;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-basis: calc(100% / 5 - 20px);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  cursor: pointer;
  padding: 10px;
  background-color: ${props => props.theme.colors.backgroundYellow};
  box-shadow: 0px 0px 10px 0px ${props => props.theme.colors.secondaryAccent};
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderRadius.sm};
`;

export const StatisticsLabel = styled.span`
  font-weight: bold;
`;
