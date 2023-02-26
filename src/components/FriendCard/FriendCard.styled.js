import styled from 'styled-components';

export const Container = styled.div`
font-size: 16px;
font-weight: bold;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px ${props => props.theme.colors.secondaryAccent};
  border: 1px solid ${props => props.theme.colors.secondary};

  background-color: ${props => props.theme.colors.backgroundYellow};

  transition: ${props => props.theme.transition};
  &:hover {
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  }
  @media (min-width: 768px) {
    width: 360px;
  }
  @media (min-width: 1280px) {
    width: 480px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 50%;
`;
